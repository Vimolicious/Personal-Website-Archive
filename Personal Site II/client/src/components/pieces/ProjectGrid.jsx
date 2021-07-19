import React, { useState, useEffect } from 'react';

import { Grid, Project } from './';

import ScaleLoader from 'react-spinners/ScaleLoader';

import hitDB from '../../middleware/hit';
import retrieveImage from '../../middleware/retrieveImage';

import './css/ProjectGrid.css';

const ProjectGrid = ({ top }) => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            /* If this check is not here, loading will be set to true, and then the page will have to be re rendered
             * which would cause this to be called again... BAM infinite loop
             */
            if (loading) {
                const projectData = await hitDB(`
                    query {
                        projects${top ? `(top: ${top})` : ''} {
                            _id
                            title
                            description
                            size
                            language
                            stars
                            forks
                            createdAt
                            url
                        }
                    }`);
                if (projectData) {
                    setProjects(projectData.data.projects);
                    setLoading(false);
                }
            }
        })();
    }, [setLoading, setProjects, top, loading]);

    return (
        <section className="project-grid">
            {!loading && (
                <Grid>
                    {projects.map(
                        ({
                            _id,
                            title,
                            description,
                            stars,
                            forks,
                            language,
                            url
                        }) => {
                            return (
                                <Project
                                    key={_id}
                                    title={title}
                                    description={description}
                                    image={retrieveImage(
                                        `github/${title.replace(/ /g, '')}.jpg`
                                    )}
                                    stars={stars}
                                    forks={forks}
                                    language={language}
                                    link={url}
                                />
                            );
                        }
                    )}
                </Grid>
            )}
            {loading && (
                <ScaleLoader height={50} width={5} radius={2} margin={'2px'} />
            )}
        </section>
    );
};

export default ProjectGrid;
