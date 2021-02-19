import octokit from './githubConfig.js';

export default async function getFileHash({ owner, repo, path }) {
    const { status, data } =  await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner, repo, path
    });
    return status === 200 && data ? data.sha : undefined;
}