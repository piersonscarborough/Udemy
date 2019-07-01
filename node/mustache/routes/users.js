const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

function authenticate(req,res,next){
    if(req.session){
        if(req.session.name){
            next()
        }else{
            res.redirect('/add-user');
        }
    }else{
        res.redirect('/add-user');
    }
};

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req,res) => {

    let user = {
        name: req.session.name, 
        age: req.session.age,
        address: {
            street: "789 St",
            city: "Houston",
            state: "Texas"
            }
        };
    res.render('index', user);
});

router.get('/add-user', (req,res) => {
    res.render('add-user');

});

router.get('/bank-accounts', authenticate, (req,res) => {
    res.send('Bank Accounts');
});

router.post('/add-user', (req,res) =>{
    let name = req.body.name;
    let age = req.body.age;

    if(req.session){
        req.session.name = name;
        req.session.age = age;
    };

    console.log(name);
    console.log(age);

    res.status(200).send();
});

router.get('/users', (req,res) => {

    let users = [
        {name: 'John Doe', age: 34},
        {name: 'Jane Doe', age: 32}
    ]
    res.render('users',{users: users});

});


module.exports = router