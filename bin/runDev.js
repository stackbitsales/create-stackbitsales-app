#!/usr/bin/env node

const { exec } = require('child_process');

const command = 'npm-run-all --parallel next:dev stackbit:dev';

const devProcess = exec(command, (err) => {
  console.error(`Failed to execute ${command}`, err);
});

devProcess.stdout.on('data', (data) => {
  const urlMatching = data.match(/Open (.*?) in your/);

  if (urlMatching) {
    console.log(`Opening local editor in browser (${urlMatching[1]})`)
    exec(`open ${urlMatching[1]}`);
  } else {
    console.log(data.trim());
  }
});