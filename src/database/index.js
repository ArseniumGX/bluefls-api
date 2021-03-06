const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const uri = process.env.NODE_ENV !== 'Development' ? 
            `mongodb+srv://blue-api.t3zbq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` :
            `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connect(uri, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    authSource: 'admin',
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(res => console.info('Database is connected!')).catch(err => console.warn("Database connection is fail."))

module.exports = mongoose