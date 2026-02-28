const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, assignedTo, dueDate } = req.body;
        if (!title) {
            return res.status(400).json({ message: "A task title is mandatory." });
        }

        const task = await Task.create({
            title,
            description,
            assignedTo,
            createdBy: req.user.id,
            dueDate,
            status: "pending"
        })
        res.status(201).json({
            message: "Task created successfully",
            task
        })
    } catch (error) {
        res.status(500).json({
            message: 'error.message',
        })
    }

}

const getTasks = async (req, res) => {
    try {
        let tasks;
        if (req.user.role === "admin") {
            tasks = await Task.find().populate("assignedTo", "name email")
        } else {
            tasks = await Task.find({ assignedTo: req.user.id })
        }

        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const UpdateTaskStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            })
        }

        if (req.user.role === "employee" && task.assignedTo.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized to update this one"
            })
        }
        task.status = status;
        task.save();

        res.json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks, UpdateTaskStatus }