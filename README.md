ExpressApi
==========

AWS Serverless Lambda REST API boilerplate using NODE.JS Express and Dynamodb

Boilerplate Node.JS REST API project using Express and DynamoDB. Deployment using ClaudiaJS and dev local using gulp

Git Clone
---------

```shell
git clone git@github.com:ravishan16/ExpressApi.git
cd ExpressApi
```

Setting up Dev Enviroment
-------------------------

```shell
npm install
npm install gulp -D
```

Run App Local
-------------

execute gulp. This invokes app.local.js under scripts

```shell
gulp
```

Create Tables in DynamoDB
-------------------------

create-db is defined as task in package.json script. This executes scripts/createDB.js

```shell
npm run create-db
```

### Express App deployment in AWS

1.	Configuring awscli

```shell
pip install awscli
aws configure
AWS Access Key ID [None]: XXXX
AWS Secret Access Key [None]: XXXX
Default region name [None]: us-east-1
Default output format [None]: json
```

1.	Deploy App to AWS

Use deploy for first time deployment. deploy is defined as npm run task in package.json script

claudia create --policies policies --handler lambda.handler --deploy-proxy-api --region us-east-1

```shell
npm run deploy
```

1.	Update App

Use update for update to initial deployment. update is defined as npm run task in package.json script

claudia update

```shell
npm run update
```
