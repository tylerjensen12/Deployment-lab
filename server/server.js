const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())


const {home, style, porpoise} = require("./controllers/pageCtrl")

app.get("/", home)
app.get('/css', style)
app.get('/porpoise', porpoise)

const {PORT} = process.env

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))