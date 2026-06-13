const router =
require("express").Router();

const User =
require("../models/User");

router.post("/register",async(req,res)=>{

const user =
await User.create(req.body);

res.json(user);

});

router.post("/login",async(req,res)=>{

const user =
await User.findOne({
email:req.body.email,
password:req.body.password
});

if(user){

res.json({
success:true
});

}else{

res.json({
success:false
});

}

});

module.exports = router;