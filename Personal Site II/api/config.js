const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: process.env.DB_URL,
    apiKey: process.env.API_KEY,
    githubToken: process.env.GITHUB_TOKEN
};
