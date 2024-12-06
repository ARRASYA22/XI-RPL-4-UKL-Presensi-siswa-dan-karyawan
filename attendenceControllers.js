const Attendance = require('../models/attendanceModel');
const attendanceController = {
    create: (req, res) => {
        const { user_id, date, status } = req.body;
        Attendance.create(user_id, date, status, (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId, user_id, date, status });
        });
    }
};

module.exports = attendanceController;