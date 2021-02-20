const { octokit } = require('./githubConfig.js');

async function getFileHash({ owner, repo, path }) {
    const response =  await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner, repo, path
    });
    
   return response;
}

module.exports = getFileHash;