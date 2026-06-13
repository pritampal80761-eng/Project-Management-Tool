const router =
require("express").Router();

const Task =
require("../models/Task");

router.get("/",async(req,res)=>{

const tasks =
await Task.find();

res.json(tasks);

});

router.post("/",async(req,res)=>{

const task =
await Task.create(req.body);

res.json(task);

});

router.put("/:id",async(req,res)=>{

const task =
await Task.findById(req.params.id);

task.status = "Completed";

await task.save();

res.json(task);

});

module.exports = router;