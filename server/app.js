const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

//ModelFile
require("./Employee");


//Declaring App As an Object 
const app = express();

//Connection String
const con = "mongodb+srv://root:toor@cluster0.dzu3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Model Object Biunding
const Employee = mongoose.model("employee");

//Defining Body as JSON
app.use(bodyparser.json());

mongoose.connect(con,{useNewUrlParser: true})
mongoose.connection.on("connected", (err)=>{

    console.log("Conneted To Mongoo")

})



app.get("/",(req,res)=>{

     Employee.find({})
     .then((data)=>{
        res.send(data);
        
     })
    .then((err)=>{
        console.log(err);
    })

})
app.post("/create",(req,res)=>{

    const employee = new Employee({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
      
    })
    employee.save()
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("Data Inserted")
})


app.post("/update",(req,res)=>{
    Employee.findByIdAndUpdate(
        req.body.id,
        {
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
        }
    
    )
  
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("Data Updated")
})




app.post("/delete",(req,res)=>{
   
    Employee.findByIdAndDelete(req.body.id)
  
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("User Deleted")
})


//Server 
app.listen( process.env.PORT || 5000 ,()=>{

    console.log("Tu kese hein ap log");

} )

