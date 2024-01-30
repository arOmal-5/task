const express= require('express');
const { createTask, getAllTasks, updateTask, deleteTask, filterById } = require('../Controllers/taskController');

const router=new express.Router();

// add task
router.post('/task',createTask)

// getalltask
router.get('/task',getAllTasks)

// update task
router.put('/tasks/:id',updateTask)

// delete task
router.delete('/tasks/:id',deleteTask)

// filter task
router.get('/tasks/:id' ,filterById)
module.exports=router