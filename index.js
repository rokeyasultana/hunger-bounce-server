const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');
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

   // get lunch
    app.get('/lunch', async (req, res)=>{
        const query = {};
        const cursor = lunchesCollection.find(query);
        const lunches = await cursor.toArray();
        res.send(lunches) ;
      });

   // get dinner
    app.get('/dinner', async (req, res)=>{
        const query = {};
        const cursor = dinnersCollection.find(query);
        const dinners = await cursor.toArray();
        res.send(dinners) ;
      });



   
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