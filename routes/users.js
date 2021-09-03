const express =  require('express');
const router =  express.Router();
const User =  require('../models/user')

router.get('/register', (req, res) => {
    res.render('site/register')
}
)


router.post('/register', (req, res) => {
    User.create(req.body, (err, user) => {
        res.redirect('/')
    })
    
}
)


router.get('/login', (req, res) => {
    res.render('site/login')
}
)

router.post('/login', (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (error, user) => {
        if (user) {
            if (user.password == password) {
                req.session.userId = user._id
                res.redirect('/')
            }else{
                res.redirect('/users/login')
            }
        } else {
            res.redirect('/users/register')
        }
    })
}
)

module.exports = router;
