const express =require('express')
const bodyParser = require('body-parser')
const {connectTodb,getdb} =require('./dbconnection.cjs')
const app =express()
app.use(bodyParser.json())

let db
connectTodb(function(error){
    if(error){
        console.log('could not establish connection..check again')
        console.log(error)
    }
    else{
        const port =process.env.port || 8000
        app.listen(port)
        db=getdb()
        console.log(`listening on port ${port}...`)
    }
})

app.post('/add-datas',function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    // const signUp = async (req,res)=>
    db.collection('signup').findOne({email}).then((result) => {
        console.log(result)
        if(result){
            response.status(200).json({
                'status':'user logged'
            })
          }  else{
            response.status(500).json({
                'status':'Invalid user'
            })
          }
    })
    
})
//signup
app.post('/add-data',function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    db.collection('signup').findOne({email}).then((result) => {
        console.log(result)
        if(result){
            response.status(500).json({
                'status':'You already registered'
            })
        } else {
            db.collection('signup').insertOne(request.body).then(function(){
                response.status(201).json({
                    'status':'data added'

                    
                })
            }).catch(function(){
                response.status(500).json({
                    'status':'data is not added'
                })
            }) 
           
        } 
    })
})
 
app.get('/get-data',function(request,response) {
    const datas = [] 
    db.collection('signup')

    .find() 
    .forEach(entry => datas.push(entry)).then(function(){
        response.status(200).json(datas)
    }).catch(function(){ 
        response.status(500).json({
            "status" : "entry is not added"
        })
    })
 } )
