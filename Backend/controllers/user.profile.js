const User = require('../models/user')

const updateProfile = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select("-password")
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        if (!req.file) {
            res.status(400).json({
                message: "image not found"
            })
        }
        user.profileImage = req.file.filename
        await user.save()
        res.status(200).json({
            message: "profile pic updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { updateProfile }