'use strict'
const {
  Model, DataTypes
} = require('sequelize')

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Attendance, {
        foreignKey: 'user_id',
        as: 'attendances'
      })
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('siswa', 'karyawan'),
        allowNull: false,
        defaultValue: 'siswa',
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  )

  return User
} 
