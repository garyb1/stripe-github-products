const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

exports.owner = 'garyb1';
exports.repo = 'stripe-github-products';
exports.octokit = octokit;