const User = require('../models/userModel');
const userController = {
    create: (req, res) => {
        const { username, password, role } = req.body;
        User.create(username, password, role, (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId, username, role });
        });
    }
};
module.exports = userController;