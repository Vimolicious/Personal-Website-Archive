const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Project {
    _id: ID!
    title: String!
    description: String!
    size: Int!
    language: String!
    stars: Int!
    forks: Int!
    createdAt: String!
    githubID: ID!
    url: String!
}

type RootQuery {
    projects(top: Int): [Project!]!
    singleProject(projectId: ID!): Project!

}

type RootMutation {
    checkForUpdate(key: String!): String!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
