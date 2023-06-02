const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("port setup on 3000");
})
app.get('/',function(req,res){
    console.log(req.body);
    res.sendFile(__dirname+"/index.html");
})