import { Octokit } from "@octokit/rest";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const owner = 'garyb1';
export const repo = 'stripe-github-products';

export default octokit;