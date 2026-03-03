const express = require('express')
const { register, login, myinfo } = require('../controllers/auth.controller')
const { protect } = require('../middlewares/auth.middleware')
const authRole = require('../middlewares/role.middleware')

const router = express.Router()
router.post('/register', protect, authRole("admin"), register)
router.get('/me', protect, myinfo)


router.post('/login', login)

module.exports = router