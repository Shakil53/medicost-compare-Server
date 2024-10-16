require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USSER}:${process.env.DB_PASSWORD}@cluster0.u7o1gfd.mongodb.net/?retryWrites=true&w=majority`;



const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
  

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        
    const db = client.db('Medicost-compare-Client');
    const productCollection = db.collection('productRecord');


    app.post('/productId', async (req, res) => {
        const product = req.body;
        const result = await taskCollection.insertOne(product);
        res.send(result);
      });


    //   await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
run().catch(console.dir);
  

app.get('/', (req, res) => {
    res.send('medicost-compare-Serve is running');
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });