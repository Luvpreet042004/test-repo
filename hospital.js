const express = require('express');
const app = express();

var users = [{
  name : "Kirat",
  kidneys: [{
    healthy : true
  },{
    healthy: false
  }]
}]

app.use(express.json())

app.get('/',(req,res)=>{
  // logic
  const johnKidneys = users[0].kidneys;
  let numberOfHealthyKidney = 0;
  let numbOfUnhealthyKidney = 0;
  let numberOfKidney = johnKidneys.length;
  for(let i = 0; i < johnKidneys.length; i++){
    if(johnKidneys[i].healthy){
        numberOfHealthyKidney = numberOfHealthyKidney+1;
    }else{
        numbOfUnhealthyKidney = numbOfUnhealthyKidney+1;
    }
  }
  res.json({
    numberOfKidney,
    numberOfHealthyKidney,
    numbOfUnhealthyKidney,
  });
})

app.post('/',(req,res)=>{
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({msg:"Done!"})
})

app.put('/',(req,res)=>{
  for(let i =0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete('/',(req,res)=>{
  let healthyKidneys = []
  for(let i =0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      healthyKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys = healthyKidneys;
  res.send("KIdneys removed")
})

app.listen(3000, (req,res)=>{
  console.log("Server Started at PORT 3000");
});