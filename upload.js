
const { MongoClient } = require("mongodb");
const fs= require("fs")
const axios=require("axios")

// Replace the uri string with your connection string.
const uri = "mongodb+srv://amila:amila123@cluster0.wpswh.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('mydb');
    const movies = database.collection('test');
    
    let rawdata = fs.readFileSync('newFile.json');
    let data = JSON.parse(rawdata);
    const todb = await movies.insertMany(data)


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
