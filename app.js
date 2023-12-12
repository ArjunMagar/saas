const express = require("express")
const app = express()



// database connection  
require("./model/index")

app.get("/",(req,res)=>{
    res.send("I am live")
})
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server has started at port ${ PORT}`)
})