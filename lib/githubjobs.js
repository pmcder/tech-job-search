
const https = require('https');
const { resolve } = require('path');

module.exports = {

    search: async (query, description) => {

        const options = {
            hostname: 'jobs.github.com',
            port: 443,
            method: 'GET',
            path: '/positions.json?location=' + encodeURIComponent(query) + '&description=' + description
        };

        return new Promise((resolve, reject) => {
            https.request(options, res => {
                let data = ''
                res.on('data', chunk => data += chunk)
                res.on('end', () => resolve(JSON.parse(data)));
            }).end();
        });

    },

    getLocations: async () => {

        let locations = [];

        const options = {
            hostname: 'jobs.github.com',
            port: 443,
            method: 'GET',
            path: '/positions.json?'
        };

        let all = await new Promise((resolve, reject) => {
            https.request(options, res => {
                let data = ''
                res.on('data', chunk => data += chunk)
                res.on('end', () => resolve(JSON.parse(data)));
            }).end();
        });

            all.forEach(element => {
                locations.push(element.location);
            });
        let uniqueLocations = Array.from(new Set(locations));
        return uniqueLocations;
    }
}