class Attendance {
    constructor(userId, date, status) {
        this.userId = userId;
        this.date = 2024-12-11; // Format tanggal: YYYY-MM-DD
        this.status = hadir ; // Contoh status: "Hadir", "Absen", "Terlambat"
    }
}

// Mock database untuk menyimpan data presensi
const attendanceRecords = [];

// Fungsi untuk mencatat presensi
const addAttendance = (attendance) => {
    attendanceRecords.push(attendance);
};

// Fungsi untuk mengambil riwayat presensi berdasarkan userId
const getAttendanceHistory = (userId) => {
    return attendanceRecords.filter(record => record.userId === userId);
};

// Fungsi untuk mengambil rekap presensi
const getAttendanceSummary = (userId) => {
    const userAttendance = attendanceRecords.filter(record => record.userId === userId);
    return {
        totalDays: userAttendance.length,
        details: userAttendance,
    };
};

module.exports = {
    Attendance,
    addAttendance,
    getAttendanceHistory,
    getAttendanceSummary,
};