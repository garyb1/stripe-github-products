const  getFileHash = require('./getFileHash.js');
const { octokit, owner, repo } = require('./githubConfig.js');

async function updateGithubFile(path, stripedData) {
    const { data } = await getFileHash({ owner, repo, path });
    const { sha } = data;
    const message = `Updating Product Info for File: ${path}`;
    const dataString = JSON.stringify(stripedData);
    const content = Buffer.from(dataString).toString("base64");
    const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        sha,
        message,
        content
    });

    return response;
}

module.exports = updateGithubFile;