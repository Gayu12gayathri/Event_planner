const {MongoClient}= require('mongodb')

let dbConnection
function connectTodb(callback){
    dbConnection = MongoClient.connect('mongodb://localhost:27017')
    .then(function(client){
        dbCOnnection = client.db()
        callback()
    }).catch(function(error){
        callback(error)
    })
}

function getdb(){
    return dbConnection
}

module.exports ={connectTodb,getdb}