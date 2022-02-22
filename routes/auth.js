const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const User = require('../models/User');  

router.post('/api/login', [ auth,
[
    check('email', 'please include a valid email').isEmail(),
    check('password', 'password is required').exists()
]
 ],
 async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password} = req.body;

    try {
       let user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        
        const ismatch = await bcrypt.compare(password, user.password);
        if(!ismatch) {
            return res.status(400).send('invalid credentials');
        };
        
        return res.send(user);
     } catch (err) {
         console.error(err.message);
         return res.status(400).json({msg: 'server error'})
     };
});

module.exports = router;