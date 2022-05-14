const {MongoClient} = require("mongodb")
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        // обращаемся к базе данных admin
        const db = mongoClient.db("admin");
        // выполняем пинг для проверки подключения
        const result = await db.command({ ping: 1 });
        console.log("Подключение с сервером успешно установлено");
        console.log(result);
    }catch(err) {
        console.log("Возникла ошибка");
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run();