//initialize the backend and front end package
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


//Connect to frontend and backend using cors middleware
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello world');
})


const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");
const uri = "mongodb+srv://jotheesh19bca:NiVi22@cluster0.zj7ul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    const menCollection = client.db("pantaloons").collection("men");
    const womenCollection = client.db("pantaloons").collection("women");
    const kidCollection = client.db("pantaloons").collection("kids");
    


    //post method
    app.post("/men", async (req, res) => {
      const data = req.body;
      const result = await menCollection.insertOne(data);
      res.send(result);
    });   
    
    app.post("/women",async(req,res)=>{
      const data =req.body;
      const result = await womenCollection.insertOne(data);
      res.send(result);
    })
    app.post("/kids",async(req,res)=>{
      const data =req.body;
      const result = await kidCollection.insertOne(data);
      res.send (result);
    })

    //get method
    app.get("/getmen", async (req, res) => {
      const product = await menCollection.find().toArray();
      res.send(product);
    });
    app.get("/getwomen",async (req,res)=>{
      const womenprodect = await womenCollection.find().toArray();
      res.send(womenprodect);
    })
    app.get("/getkids" , async (req,res) =>{
      const kidsproduct = await kidCollection.find().toArray();
      res.send(kidsproduct);
    })


    
    //get an perticular id

    app.get ('/men/:id',async (req,res)=>{
      const id = req.params.id;
      const filter ={_id: new ObjectId(id)};
      const result = await menCollection.findOne(filter)
      res.send (result);
    })

    //  for women  
    app.get ('/women/:id',async (req,res)=>{
      const id = req.params.id;
      const filter ={_id: new ObjectId(id)};
      const result = await womenCollection.findOne(filter)
      res.send (result);
    })

    //  for kids
    app.get ('/kids/:id',async (req,res)=>{
      const id = req.params.id;
      const filter ={_id: new ObjectId(id)};
      const result = await kidCollection.findOne(filter)
      res.send (result);
    })




    // update method

    // for men

    app.patch("/patchmen/:id",async(req,res)=>{
      const id = req.params.id
      const update =req.body;
      const filter ={_id: new ObjectId(id)};
      const updatedoc ={
        $set :{
          ...update
        }};
        const option ={update: true};
        const result = await menCollection.updateOne(filter,updatedoc,option);
        res.send(result)
    })


    // for women

    app.patch("/patchwomen/:id",async(req,res)=>{
      const id = req.params.id
      const update =req.body;
      const filter ={_id: new ObjectId(id)};
      const updatedoc ={
        $set :{
          ...update
        }};
        const option ={update: true};
        const result = await womenCollection.updateOne(filter,updatedoc,option);
        res.send(result)
    })

// for kids 

    app.patch("/patchkids/:id",async(req,res)=>{
      const id = req.params.id
      const update =req.body;
      const filter ={_id: new ObjectId(id)};
      const updatedoc ={
        $set :{
          ...update
        }};
        const option ={update: true};
        const result = await kidCollection.updateOne(filter,updatedoc,option);
        res.send(result)
    })



    //delete method

    // for men
    app.delete("/deletemen/:id",async (req,res)=>{
      const id = req.params.id
      const filter ={_id: new ObjectId(id)};
      const result = await menCollection.deleteOne(filter);
      res.status(200).json({success : true,message:"data is deleted",result});
    });

    //for women
    app.delete("/deletewomen/:id",async (req,res)=>{
      const id = req.params.id
      const filter ={_id: new ObjectId(id)};
      const result = await womenCollection.deleteOne(filter);
      res.status(300).json({success : true,message:"data is deleted",result});
    });


    // for kids
    app.delete("/deletekids/:id",async (req,res)=>{
      const id = req.params.id
      const filter ={_id: new ObjectId(id)};
      const result = await kidCollection.deleteOne(filter);
      res.status(200).json({success : true,message:"data is deleted",result});
    });


    // bulk delete items
    app.delete ("/bulkDelete", async(req,res)=>{
      const {allIds} =req.body;
      const objectIds = allIds.map(id => new ObjectId(id))
      const result = await womenCollection.deleteMany({_id: {$in:objectIds}});
      res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`listing on port ${port}`);
})

