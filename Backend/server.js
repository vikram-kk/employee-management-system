const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db')
const authRoute = require('./routes/auth.routes')
const taskRoute = require('./routes/task.routes')
const stafflist = require("./routes/users.route")

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json('hello vikram')
})

app.use('/auth', authRoute)
app.use('/tasks', taskRoute)
app.use('/staff', stafflist)

const PORT = process.env.PORT_URL || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));