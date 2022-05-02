//SETTING UP A SIMPLE EXPRESS SERVER!!

const express = require('express');
const wiki = require('./wiki.js');
const app = express()
const port =3000;

//simple example of logging middleware
const myLogger = function(req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());
  
  next(); // THIS IS IMPORTANT! It tells the express app to move on to the next bit of code
}

app.use(myLogger)

//below we use '.use()' to get access to the router data located in 'wiki.js'

// app.use('/wiki', wiki);

//by storing html,css and js in 'public' folder, we now have access to static files.
//this is using an Express server to serve a front end client!
//the FIRST 'public' is a prefix to the base URL, i.e - 'URL/public'. This can be ommitted to give just:
//app.use(express.static('public'))

app.use('/public', express.static('public'))

//listening log
app.listen(port, function(){
    console.log(`Express example listening at port ${port}`)
});

/**CONNECTING TO MONGODB!!!!!!!!!!! */

const { MongoClient, ServerApiVersion } = require('mongodb');
const assert = require('assert');

//define MongoDB database and Collection to be queried 
const mongoDBCollection = 'planets';
const mongoDBDataBase = 'sample_guides';

//define MongoDB search query 
const agg = [
  {
    '$project': {
      'name': 1, 
      'hasRings': 1, 
      'mainAtmosphere': 1, 
      'surfaceTemperatureC': 1,
      'orderFromSun':1
    }
  }];

  let myArray=[];

//CONNECTION TO MONGODB and data retrieval 
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ackie.mongodb.net/sample_training?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db(mongoDBDataBase);
  //DB query:
collection.collection(mongoDBCollection).aggregate(agg)
.toArray(function(err, result){
    if(err) throw err;
    console.log(result);//console log received data
    myArray.push(result);
    console.log("my array:", myArray);
    //assign data to a route endpoint - i.e '/api' -  so that it can be accessed by the front end
    app.get('/api', function(req, res){
      res.json(result);//whatever data we wish to be assigned
    })
    myDataFunction(myArray);
    client.close();
  });
});

const myDataFunction = (myArray)=>{
  console.log("this array is: ", myArray)
}

