const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async query => {
    try {
        const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.githubToken}`
            }
        });

        return await res.json();
    } catch (err) {
        console.error(err);
    }
};
