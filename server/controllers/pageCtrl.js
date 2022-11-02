const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },

    style: (req, res) => {
        res.sendFile(path.join(__dirname, '../../styles.css'))
    },

    porpoise: (req, res) => {
        res.sendFile(path.join(__dirname, '../../Porpoise.jpg'))
    }
}