const taskSchema = require('../Models/schema')

// create task 
exports.createTask = async (req,res) => {

    const{title, description,completed} = req.body

    try {
        const newTask = await taskSchema({title, description,completed})
        await newTask.save()
        res.status(200).json(newTask)
        
    } catch (error) {
        res.status(400).json(error)
        
    }

}

// read task
exports.getAllTasks = async (req,res) => {

    try {

        const getData = await taskSchema.find()
        res.status(200).json(getData)
        
    } catch (error) {
        res.status(400).json(error)
        
    }

}

// update task
exports.updateTask = async (req, res) => {

    const {id} = req.params
    const {title, description,completed} = req.body

    try {
        if(id){
            const task = await taskSchema.findById(id)
            task.title = title
            task.description = description
            task.completed = completed
            await task.save()
            res.status(200).send("task updated successfully") 
        }else{
            res.status(404).json("Task not found")
        }
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

// delete task
exports.deleteTask = async (req, res) => {

    const {id} = req.params
    try {

        if(id){
            await taskSchema.findByIdAndDelete(id)
            res.status(200).json("Task deleted successfully")
        }
        else{
            res.status(404).json("Task not found")
        }
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

// filter by id
exports.filterById = async (req,res) => {

    const {id} = req.params

    try {

        if(id){
            const task = await taskSchema.findById(id)
            res.status(200).json(task)
        }else{
            res.status(404).json("Task not found")
        }

        
    } catch (error) {
        res.status(400).json(error)
        
    }
}