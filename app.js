const express=require('express');
const mongoose=require('mongoose');
const path=require("path");
const userModel =require('./models/Users')
mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://hoss90:Hoss.1990@cluster0.nta9z9b.mongodb.net/knowledge?retryWrites=true&w=majority', {useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors= require('cors');
app.use(cors());
app.get("/api/getData", (req, res,next) => {
    userModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
app.post('/api/data',async (req,res,next)=>{
    const data=req.body;
    const newData=new userModel(data);
    await newData.save()
    res.json(data)
});
app.use(express.static(path.join(__dirname, "./knowledge/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./knowledge/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

module.exports=app;