const router = require("express").Router()

const Tasks = require("./taskModel.js")



router.get("/",async(req,res) => {
    try {
        const task = await Tasks.findTasks();
        res.status(200).json(task);
    }
    catch(error) {
        res.status(500).json({message: "Could not retrieve tasks"})
    }
})

router.post("/", async(req,res) => {
    const taskData = req.body;
    try {
        const task = await Tasks.addTask(taskData);
        if(task) {
            res.status(201).json({message:"Successfully added new task"})
        }
        else {
            res.status(400).json({message:"Could not add new task"})
        }
    }
    catch (error) {
        res.status(500).json({message:"Server error; could not add new task"})
    }
})

module.exports = router;