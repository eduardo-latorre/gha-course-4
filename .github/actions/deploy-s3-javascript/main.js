/*
There are some packages needed in order to use Actions toolkit
cd .github/actions/deploy-s3-javascript
npm init -y
npm install @actions/core @actions/github @actions/exec

node_module within the action SHOULD NOT BE IGNORED
github action will not install these dependencies
*/
const core = required('@actions/core');
const github = required('@actions/github');
const exec = required('@actions/exec');

function run(){
    // Use messages from GithubActio
    core.notice('Hello from my custom JavaScript Action!')
}

run();