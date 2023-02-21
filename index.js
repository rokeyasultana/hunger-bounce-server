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

console.log(uri);

async function run (){
try{
   
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