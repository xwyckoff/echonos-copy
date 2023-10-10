const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mfg extends Model {};

Mfg.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        mfgName: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commodityID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mfg'
    }
)