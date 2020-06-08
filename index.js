const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const sequelize = require('./config/database')
const usersRoutes = require('./routes/users')

app.use('/api', usersRoutes)

app.use(express.static(path.join(__dirname,'public')))

app.use((req, res, next)=>{
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()