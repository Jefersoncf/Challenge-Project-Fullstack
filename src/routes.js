const express = require('express');
const User = require('./models/Messager');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.ejs')
})

//testando rota 
routes.post('/home', async (req, res) =>{ 
    try {
        const { name, email, message} =  req.body;
        await User.create({name, email, message,})
            return res.render('index.ejs');
    }
    catch(error) {
        return res.status(400).send(error);  
    }
})
module.exports = routes;