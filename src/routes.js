const express = require('express');
const User = require('./models/User');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.ejs')
})

//testando rota 
routes.post('/home', async (req, res) =>{ 
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        alert('success')
            return res.render('index.ejs') 
    }
    catch(error) {
        return res.status(400).send(error);  
    }
})
module.exports = routes;