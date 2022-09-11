const express = require("express");
const app=express();
const router = express.Router();
const Posts= require("../Model/model2");
const Note=require("../model/model1");
const Carts=require("../Model/model3")
let UsernameAU="";

         ///////////////////////////////////////////LOGIN REGISTRATION PART /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get("/posts",(req,res)=>{
//     res.send("We are on post");
// });

router.route("/found").get((req,res)=>{   //finding usernames already in db
    Posts.find({})
        .then(foundNotes => res.json(foundNotes))
        
        
  })

router.post("/register", async (req,res)=>{    //username entry
        const title=req.body.Username;
        const content=req.body.Password;

        console.log("from route:  "+ title+" ,,, "+ content);
        const post= new Posts({
            Username: req.body.Username,
            Password: req.body.Password
    });
    console.log(post);
    post.save((err, data) => {
        console.log('Analyzing Data...');
        if(data) {
            console.log('Your data has been successfully saved.');
            res.json(data);
        }
        else {
          console.log('Something went wrong while saving data.');
          console.log(err);
          res.send(err);
        }
    });

});
router.post("/Auth", async (req,res)=>{ // sending data from login page to register
  console.log("auth   " + req.body.Username);
  UsernameAU=req.body.Username;
});


         /////////////////////////////////////////// NOTE MAKING PART ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.route("/note").post((req,res)=>{ //location list making
  console.log(req.body);
    const title=req.body.title;
    const content=req.body.content;
    const url=req.body.url;
    const price= req.body.price;
    const cont=req.body.cont;
    const id=req.body.id;
    console.log("from route"+ title+" ,,, "+ content+"  ,,,,   ,,,   "+url);
    
    const newNote= new Note({
      title: title,
      content: content,
      cont: cont,
      id: id,
      price: price,
      cont: cont,
      url: url
    });
  
    newNote.save();
    
  })
 
  router.route("/poost").get((req,res)=>{   //notes finding
    Note.find()
        .then(foundNotes => res.json(foundNotes))   
  })
  // router.route("/User").get((req,res)=>{   //notes finding
  //   UsernameAU.then(foundNotes => res.json(foundNotes))   
  // })

  // router.post("/del",(req,res)=>{   //notes deleting
    
  //   const title=req.body._id;
    
  //   Note.deleteOne({_id: title}).then(() => res.set(201).send("Deleted Successfully..."))
  //   .catch((err) => console.log(err));;       
  // })




  //////////////////////////////////////////////////////////cart

  router.route("/cart").get((req,res)=>{   //cart item finding
    Carts.find({Username: UsernameAU})
        .then(foundNotes => res.json(foundNotes))   
  })
  router.route("/cartpost").post((req,res)=>{
    const username=UsernameAU;
    const id= req.body.id;
    const newNote= new Carts({
      username: username,
      id: id
    });
    newNote.save();
  })
module.exports=router;