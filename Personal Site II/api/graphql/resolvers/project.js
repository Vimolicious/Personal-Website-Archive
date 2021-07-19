const config = require('../../config.js');
const bcrypt = require('bcrypt');

const Project = require('../../models/project');
const query = require('../../middleware/hitGithub');

const formatProject = project => ({
    ...project._doc,
    title: project.title.toString().replace('-', ' '),
    size: +project.size,
    stars: +project.stars,
    forks: +project.forks,
    createdAt: new Date(project.createdAt).toISOString()
});

module.exports = {
    projects: async ({ top }) => {
        try {
            let projects = await Project.find();

            projects.sort((a, b) => {
                return b.stars - a.stars;
            });

            if (top) {
                projects = projects.splice(0, top);
            }

            return projects.map(project => formatProject(project));
        } catch (err) {
            throw err;
        }
    },
    singleProject: async ({ projectId }) => {
        try {
            const project = await Project.findById(projectId);
            return formatProject(project);
        } catch (err) {
            throw new Error('Project not found!');
        }
    },
    checkForUpdate: async ({ key }) => {
        if (!(await bcrypt.compare(key, config.apiKey)))
            throw new Error('Invalid credentials');

        try {
            const data = await query(`
                query {
                    repositoryOwner(login: "Vimolicious") {
                        repositories(first: 30, privacy: PUBLIC) {
                            edges {
                                node {
                                    id
                                    name
                                    description
                                    diskUsage
                                    primaryLanguage {
                                        name
                                    }
                                    stargazers {
                                        totalCount
                                    }
                                    forkCount
                                    createdAt
                                    url
                                }
                            }
                        }
                    }
                }
            `);

            const repos = data.data.repositoryOwner.repositories.edges;

            /* If it exists or it's new */
            // Go through each of the repositories returned from the query
            // and update them using the mongoose method "updateOne"
            Promise.all(
                repos.map(
                    async ({
                        node: {
                            id,
                            name,
                            description,
                            diskUsage,
                            primaryLanguage: { name: languageName },
                            stargazers: { totalCount },
                            forkCount,
                            createdAt,
                            url
                        }
                    }) =>
                        Project.updateOne(
                            { githubID: id },
                            {
                                title: name,
                                description,
                                size: diskUsage,
                                language: languageName,
                                stars: totalCount,
                                forks: forkCount,
                                createdAt,
                                url
                            },
                            {
                                upsert: true
                            },
                            err => {
                                if (err) console.error(err);
                            }
                        )
                )
            );

            /* If it has been deleted */
            // Fetch all the projects in the database
            const projectsInDatabase = await Project.find();

            // Go through each of those projects and check if one of the
            // repositories from github shares and id with it.
            // If it does, move on. If it doesn't, delete that project from the database,
            // because it's no longer on github.
            Promise.all(
                projectsInDatabase.map(async ({ githubID }) => {
                    let validId = false;
                    repos.map(({ node: { id } }) => {
                        if (githubID === id) {
                            validId = true;
                        }
                    });

                    if (validId) return;

                    await Project.deleteOne({ githubID });
                })
            );

            return 'Successful';
        } catch (err) {
            console.error(err);
            return 'Error';
        }
    }
};
