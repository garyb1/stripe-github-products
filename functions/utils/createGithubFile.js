const { octokit, owner, repo } = require('./githubConfig.js');

async function createGithubFile(path, data) {
    const message = `Creating Product: ${path}`;
    const dataString = JSON.stringify(data);
    const content = Buffer.from(dataString).toString("base64");
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        message,
        content
    });
}

module.exports = createGithubFile;