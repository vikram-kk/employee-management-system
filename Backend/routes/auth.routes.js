const express = require('express')
const { register, login } = require('../controllers/auth.controller')
const protect = require('../middlewares/auth.middleware')
const authRole = require('../middlewares/role.middleware')

const router = express.Router()
router.post('/register', register)


router.post('/login', login)

module.exports = router