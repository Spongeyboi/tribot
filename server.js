exports.start=async()=>{
  const express = require("express")
  
  const app = express()

  app.get("/",async(req,res)=>{
    res.send("OK")
  })



  
  app.listen(3000)
}