ExpressApi
==========

A Boilerplate for AWS Serverless Lambda REST API boilerplate using NODE.JS Express and Dynamodb

Boilerplate Node.JS REST API project using Express and DynamoDB. Deployment using ClaudiaJS and dev local using gulp

Getting Started
---------------

The easiest way to get started is to clone the repository:

### Get the latest snapshot

```shell
git clone --depth=1 git@github.com:ravishan16/ExpressApi.git myproject
cd myproject
```

### Install NPM dependencies

```shell
npm install
```

Start App Local
===============

Execute gulp. This invokes app.local.js under scripts. gulp-nodemon Automatically restart Node.js server on code changes.

```
gulp
```

Create Tables in DynamoDB
-------------------------

create-db is defined as task in package.json script. This executes scripts/createDB.js

```shell
npm run create-db
```

### Express App deployment in AWS

1.	Configure awscli
2.	Deploy App to AWS
3.	Push changes to AWS

### Configure awscli

```shell
pip install awscli
aws configure
AWS Access Key ID [None]: XXXX
AWS Secret Access Key [None]: XXXX
Default region name [None]: us-east-1
Default output format [None]: json
```

### Deploy App to AWS

Use deploy for first time deployment. deploy is defined as npm run task in package.json script

claudia create --policies policies --handler lambda.handler --deploy-proxy-api --region us-east-1

```shell
npm run deploy
```

### Push changes to AWS

Use update for update to initial deployment. update is defined as npm run task in package.json script

claudia update

```shell
npm run update
```
