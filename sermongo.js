const {MongoClient} = require("mongodb")
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
  
// Подключаемся к серверу
mongoClient.connect((err, client)=>{
       
    // обращаемся к базе данных admin
    const db = client.db("admin");
     
    db.command({ping: 1},(err, result)=>{
        if(!err){
            console.log("Подключение с сервером успешно установлено");
            console.log(result);
        }
        // Закрываем подключение
        client.close();
        console.log("Подключение закрыто");
    });
});