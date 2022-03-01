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

let repoName = process.argv[2];

if ( repoName == null ) {
  repoName = `stackbit-playground`;
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/stackbitsales/stackbit-playground ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log("🎉 Congratulations!")
console.log("👇 Next steps:")
console.log(`1️⃣ [In the terminal] Run: cd ${repoName}, then: npm run dev`);
console.log(`2️⃣ [Open a new terminal window] Run: cd ${repoName}, then: sudo npm install -g @stackbit/cli, then: stackbit dev`);
console.log(`3️⃣ [Open the repo in your IDE (VS Code, Sublime, etc)]`);
console.log(`4️⃣ [Open the https://app.stackbit.com/... output in step 2]`);
console.log(`🧑‍🏫 Follow this tutorial: https://youtu.be/YgJI1dL0Vqs`);