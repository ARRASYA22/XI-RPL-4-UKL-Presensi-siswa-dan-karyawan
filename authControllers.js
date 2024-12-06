const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const authControllers = {
    login: (req, res) => {
        const { username, password } = req.body;
        User.findByUsername(username, (err, results) => {
            if (err) throw err;
            if (results.length > 0 && results[0].password === password) {
                const token = jwt.sign({ id: results[0].id }, 'secret', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    }
};

module.exports = authControllers;