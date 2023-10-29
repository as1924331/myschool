const {MongoClient} = require('mongodb')


const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(()=> console.log("connected successfully"))
    .catch(error => console.log("something Went wrong" , error))