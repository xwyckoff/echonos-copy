const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ControlNumber extends Model {};

ControlNumber.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cnName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'controlNumbers'
    }
)