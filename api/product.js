'use strict'
const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const compression = require('compression')
// const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()
const product = express.Router()
const AWS = require("aws-sdk");


const productl = [{
  product_id: 1,
  description: 'Echo'
}, {
  product_id: 2,
  description: 'Echo Dot'
}]


AWS.config.update({
  region: "us-east-1",
  // endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();
const product_table = "product_t";
// middleware that is specific to this router
product.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
product.post('/add', function (req, res) {
  console.log(req.body);
    console.log(req.body.product_id);
  var params = {
		TableName: product_table,
		Item: {
      product_id: req.body.product_id,
      description: req.body.description
		}
	};
  console.log(params);

  console.log("Adding a new Product...");
  docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
          res.status(201).json(data)
      }
  });
})


// define the home page route
product.get('/list', function (req, res) {
  var params = {
		TableName: product_table
	};
  docClient.scan(params, onScan);

  function onScan(err, data) {
      if (err) {
          console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          // print all the Products
          console.log("Scan succeeded.");
          res.status(200).json(data)
      }
  }
})

module.exports = product
