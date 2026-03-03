const express = require('express')
const User = require('../models/user')
const router = express.Router()
const { protect } = require('../middlewares/auth.middleware')
const authRole = require('../middlewares/role.middleware')

router.get('/all/list', protect, authRole("admin"), async (req, res) => {
    try {
        const staffList = await User.find({}).select('name')
        res.status(200).json({
            message: "all Staff list created",
            staffList
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = router