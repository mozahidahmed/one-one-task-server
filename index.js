
const express=require('express');
const cors = require('cors');
require('dotenv').config();
const app =express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port=process.env.PORT || 5000;


//5T3T7ooC2RhE5tcB

//

//middleware
app.use(cors());
app.use(express.json());

//......................................................

///kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


const uri = "mongodb+srv://pogramming-team:zdH0nMopErWPIt8B@cluster0.cbcpj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
      await client.connect();
       const taskCollection=client.db('pogramming-team').collection('task');


    //....................................................
       app.post('/task',async (req,res)=>{
  
        const task=req.body;
        console.log(task)
        const result =await taskCollection.insertOne(task)
        res.send(result)
        })
    //......................................................
       
      
    //............................................................
    app.get('/task',async(req,res)=>{
           
        const query ={};
        const cursor=taskCollection.find(query);
        const task=await cursor.toArray();
        res.send(task);

       })
    //...........................................................
    
    
    
      
    
    
    }
    
    finally{


    
    }
    
    
    }run().catch(console.dir);
    
    
    
    
    app.get('/',(req,res)=>{
      res.send('running server ')
    });
    
    
    app.listen(port,()=>{
    
    console.log("I AM FIRST OPERATION",port)
    
    })
    
    
    
    
    
    
    
    
    
    


