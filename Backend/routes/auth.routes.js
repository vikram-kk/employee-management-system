const express = require('express')
const { register, login } = require('../controllers/auth.controller')
const router = express.Router()

router.post('/register', protect, authRole("admin"), register)


router.post('/login', login)

module.exports = router