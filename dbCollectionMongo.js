const {MongoClient} = require("mongodb")
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
  
mongoClient.connect((err, client)=>{
       
    const db = client.db("usersdb");
    const collection = db.collection("users");
    collection.countDocuments((err, result)=>{
           
        if(err)  return console.log(err);
        
        console.log(`В коллекции users ${result} документов`);
        client.close();
    });
});