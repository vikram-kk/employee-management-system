const express = require("express")
const { protect } = require('../middlewares/auth.middleware')
const authRole = require('../middlewares/role.middleware')
const { createTask, getTasks, UpdateTaskStatus } = require('../controllers/task.controller')
const router = express.Router();

router.get('/', protect, getTasks)

router.post('/create', protect, authRole("admin"), createTask)
router.patch('/update/:id', protect, UpdateTaskStatus)



module.exports = router