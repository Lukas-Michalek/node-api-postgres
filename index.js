const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Importing queries

const db = require('./queries')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (request,response) => {
    response.json({info:'Node.js, Express, and Postgres API'})
})

// CRUD End Points

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}.`)
})

