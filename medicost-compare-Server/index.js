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
        
      const cartCollection = client.db('medicost').collection("carts");
      const doctorCollection = client.db('medicost').collection("doctors");


      // carts collection by email
      app.get('/carts', async (req, res) => {
        const email = req.query.email;
        const query = {email: email}
        const result = await cartCollection.find(query).toArray();
        res.send(result)
      })
      // --------------------------------
      // carts collection by generic
      app.get('/allProducts', async (req, res) => {
        const generic = req.query.generic;
        console.log("Searching for products with generic:", generic);
        // const query = {generic: generic}
        // Use a case-insensitive regex to match the generic value
        const query = { generic: { $regex: new RegExp(generic, "i") } };
        const result = await cartCollection.find(query).toArray();
        res.send(result)
      })
      // search by generic or name
      app.get('/allPNameORGen', async (req, res) => {
        const searchTerm = req.query.search;
        const regex = /^[a-zA-Z0-9\s-]+$/;
        if (!regex.test(searchTerm)) {
          return res.status(400).json({ message: 'Invalid search term.' });
        }
      
        try {
          const productByName = await cartCollection.findOne({ name: { $regex: new RegExp(searchTerm, "i") } });
          
          if (productByName) {
            
            const productsWithSameGeneric = await cartCollection.find({ generic: productByName.generic }).toArray();
            return res.send(productsWithSameGeneric);
          }
      
          const productsByGeneric = await cartCollection.find({ generic: { $regex: new RegExp(searchTerm, "i") } }).toArray();
      
          res.send(productsByGeneric);
          
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error.' });
        }
      });
      // -------------------------------
      // product suggestion by search
      app.get('/productSuggestions', async (req, res) => {
        const searchTerm = req.query.search;
        const regex = /^[a-zA-Z0-9\s-]+$/; 
        if (!regex.test(searchTerm)) {
          return res.status(400).json({ message: 'Invalid search term.' });
        }
      
        try {
          const suggestions = await cartCollection.find({
            $or: [
              { name: { $regex: new RegExp(searchTerm, "i") } },
              { generic: { $regex: new RegExp(searchTerm, "i") } }
            ]
          }).limit(5).toArray();
          res.send(suggestions);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error.' });
        }
      });
      // -------------------------------

      app.post('/allProducts', async (req, res) => {
        const productItem = req.body;
        console.log(productItem);
        const result = await cartCollection.insertOne(productItem)
        res.send(result)
      })

      app.post('/carts', async (req, res) => {
        const cartItem = req.body;
        console.log(cartItem);
        const result = await cartCollection.insertOne(cartItem)
        res.send(result);
      })
      app.post('/fromCampare', async (req, res) => {
        const addItem = req.body;
        console.log(addItem);
        const result = await cartCollection.insertOne(addItem)
        res.send(result);
      })
      // put method ----------------
      app.put('/allProducts/:id', async (req, res) => {
        const id = req.params.id;
        const { numberOfItem } = req.body;
      
        try {
          const filter = { _id: new ObjectId(id) };
          const updateDoc = {
            $set: { numberOfItem },
          };
      
          const result = await cartCollection.updateOne(filter, updateDoc);
          res.send(result);
        } catch (error) {
          res.status(500).send({ message: 'Error updating cart item', error });
        }
      });
      // delete method -------------
      app.delete('/allProducts/:id', async (req, res) => {
        const id = req.params.id;

        try {
          const query = { _id: new ObjectId(id) };
          const result = await cartCollection.deleteOne(query);
          res.send(result);
        } catch (error) {
          res.status(500).send({ message: 'Error deleting cart item', error });
        }
      });



      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
run().catch(console.dir);
  

app.get('/', (req, res) => {
    res.send('medicost-compare-Serve is running');
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });