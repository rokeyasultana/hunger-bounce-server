const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion, CURSOR_FLAGS, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//mongodb
const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@cluster0.niidmnq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run (){
try{
    // breakfast collection
    const breakfastsCollection = client.db('hunger-bounce').collection('breakfast');

    // lunch collection
    const lunchesCollection = client.db('hunger-bounce').collection('lunch');

    //dinner collection
    const dinnersCollection = client.db('hunger-bounce').collection('dinner');


   // get breakfast 
    app.get('/breakfast', async (req, res)=>{
        const query = {};
        const cursor = breakfastsCollection.find(query);
        const breakfasts = await cursor.toArray();
        res.send(breakfasts) ;
      });

      //get breakfast by id

      app.get('/breakfast/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id:new ObjectId(id)};
        const result = await breakfastsCollection.findOne(query);
        res.send(result);
      })

   // get lunch
    app.get('/lunch', async (req, res)=>{
        const query = {};
        const cursor = lunchesCollection.find(query);
        const lunches = await cursor.toArray();
        res.send(lunches) ;
      });

//get lunch by id

            app.get('/lunch/:id',async(req,res)=>{
              const id = req.params.id;
              const query = {_id: new ObjectId(id)};
              const result = await lunchesCollection.findOne(query);
              res.send(result);
            })
      

   // get dinner
    app.get('/dinner', async (req, res)=>{
        const query = {};
        const cursor = dinnersCollection.find(query);
        const dinners = await cursor.toArray();
        res.send(dinners) ;
      });

      //get dinner by id

      app.get('/dinner/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id:new ObjectId(id)};
        const result = await dinnersCollection.findOne(query);
        res.send(result);
      })


   
}

finally{

}


}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello From Hunger Bounce!')
})

app.listen(port, () => {
  console.log(`Hunger Bounce listening on port ${port}`)
})