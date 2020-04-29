# Lambda Generate Screenshot

![Deploy to Lambda](https://github.com/bluehost/lambda-bluehost-generate-screenshot/workflows/Deploy%20to%20Lambda/badge.svg)

An AWS Lambda function for generating a screenshot from a URL.

## Install

- Run `npm install`

## Local Testing

- Run `node local.js`

## Deployment

By default, this repository is setup to auto-deploy when a new commit is made.

However, if you wish to push changes from your local machine while testing, you can simply run the `npm run deploy` command. 

In order for local deployments to actually work, you will need to:

- Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) tool.
- Create a [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) named `bluehost`. 

Note: You will need to rerun `npm install` after a local deployment in order to install Chromium locally.
