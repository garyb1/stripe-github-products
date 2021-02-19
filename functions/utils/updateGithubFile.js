const  getFileHash = require('./getFileHash.js');
const { octokit, owner, repo } = require('./githubConfig.js');

async function updateGithubFile(path = 'test.json', data) {
    const sha = await getFileHash(owner, repo, path);
    const message = `Updating Product Info for File: ${path}`;
    const dataString = JSON.stringify(data);
    const dateBase64 = Buffer.from(dataString).toString("base64");

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        sha,
        message,
        content: dateBase64
    });
}

module.exports = updateGithubFile;