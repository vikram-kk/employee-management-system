const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"]
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        dueDate: Date
    }
)

module.exports = mongoose.model("Task", taskSchema)