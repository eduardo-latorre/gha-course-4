/*
There are some packages needed in order to use Actions toolkit
cd .github/actions/deploy-s3-javascript
npm init -y
npm install @actions/core @actions/github @actions/exec

node_module within the action SHOULD NOT BE IGNORED
github action will not install these dependencies
*/
const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    // Use messages from GithubAction
    core.notice('Hello from my custom JavaScript Action!');

    // 1-Get input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true }); // Can be true even if action is false
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2-Upload files
    // AWS CLI is pre install in ubuntu-latest
    // ` This is JS notation 
    const s3Uri = `s3://${bucket}`; // Passing vars into s3 string in JS
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); // Run a command from JS

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl) // Should match the output name in the action

    // To send request to REST GITHUB API to get access to GitHub context objects
    // github.getOctokit
}

run();

// gha-custom-action-demo