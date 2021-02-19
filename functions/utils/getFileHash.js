const { octokit } = require('./githubConfig.js');

async function getFileHash({ owner, repo, path }) {
    const { sha } =  await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner, repo, path
    });
    
    return sha;
}

module.exports = getFileHash;