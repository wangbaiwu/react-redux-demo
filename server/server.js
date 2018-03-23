
const express=require('express')
const mongoose =require('mongoose')

const DB_URL='mongodb://192.168.10.57:27017/test'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//新建数据模型
const User=mongoose.model('user', new mongoose.Schema({
	user:{type:String, require:true},
	age:{type:Number, require:true}
}))



// User.create({
// 	user:'xiaoming',
// 	age:19
// },function(err, doc){
// 	if(!err){
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })

// User.remove({age:18},function(err,doc){
// 	console.log(doc);
// })

// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
// 	console.log(doc)
// })

const app = express()

app.get('/',function(req,res){
	res.send('<h1>hello world</h1>')
})
app.get('/data',function(req,res){
	User.findOne({user:"xiaoming"},function(err,doc){
		res.json(doc)
	})	
})
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})


