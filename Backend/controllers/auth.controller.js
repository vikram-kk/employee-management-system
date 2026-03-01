const User = require('../models/user')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }

        const hashPass = await bycrypt.hash(password, 10)

        const user = await User.create({
            name,
            role,
            password: hashPass,
            email
        })

        res.status(201).json({
            message: 'User registered successfully', user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                role: existingUser.role
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "please enter valid email and password"
            })
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                message: "Invalid email or password "
            })
        }

        const isMatch = await bycrypt.compare(password, existingUser.password);


        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign(
            { id: existingUser._id, role: existingUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                role: existingUser.role
            }
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}
module.exports = { register, login }