const { octokit } = require('./githubConfig.js');

async function getFileHash({ owner, repo, path }) {
    const response =  await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner, repo, path
    });

    if (response && response?.sha) {
        return  response?.sha ? response.sha : response.data.sha;
    }
}

module.exports = getFileHash;