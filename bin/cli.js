#!/usr/bin/env node

const {execSync} = require ('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

// const repoName = process.argv[2];
const repoName = `stackbit-playground`;
const gitCheckoutCommand = `git clone --depth 1 https://github.com/stackbitsales/stackbit-playground ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log("🎉 Congratulations! You're ready to go.")
console.log("👇 Here are the next steps:")
console.log(`🚧 [Terminal Window 1] cd ${repoName} && npm install && npm run dev`);
console.log(`🚧 [Terminal Window 2] cd ${repoName} && npm install -g @stackbit/cli && stackbit dev`);
console.log(`✅ Happy building! 🎉`);
console.log(`🧑‍🏫 Tutorial: https://youtu.be/YgJI1dL0Vqs`);