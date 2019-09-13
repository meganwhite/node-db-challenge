const router = require("express").Router()

const Resources = require("./resourceModel.js")

router.get("/",async(req,res) => {
    try {
        const resources = await Resources.findResources();
        res.status(200).json(resources)
    }
    catch(error) {
        res.status(500).json({message:"Failed to retrieve resources"})
    }
})

router.post("/",async(req,res) => {
    const newResource = req.body;

    try {
        const resource = await Resources.addResource(newResource);
        if (resource) {
            res.status(201).json({message: "added resource"})
        }
        else {
            res.status(400).json({message: "Could not create resource"})
        }
    }
    catch(error) {
        res.status(500).json({message: "Failed to create resource"})
    }
})

module.exports = router;