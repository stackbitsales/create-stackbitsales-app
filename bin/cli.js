#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
};

let repoName = process.argv[2];

if (repoName == null) {
    repoName = `stackbit-playground`;
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/stackbitsales/stackbit-playground ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('🎉👇 Next step');
console.log(`Run: cd ${repoName} && npm run dev`);
