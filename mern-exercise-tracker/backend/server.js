// middleware setup
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

// **mongo DB interaction***

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://SMC-Forge:SMC-Forge@cluster0.jvp0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    await mongoose.connect(uri);
    console.log("Mongoose connected successfully");

  } catch (err){
    // Ensures that the client will close when you finish/error
    //await client.close();
    console.log("Failed to connect to MondoDB",err);
  }

}
run().catch(console.dir);

// This code did not work, perhaps because it's a newer version of mongoDB and the connection mechanism is slightly different.
/*

// initiate Mongo DB connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true }
); 
const connection = mongoose.connection;

// alert user to connected state
connection.once('open',() => {
    console.log('MongoDB database connection is established safely');
})

*/

// endpoints to server as routes.

// 

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// incorporate endpoints into project
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
// create the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});