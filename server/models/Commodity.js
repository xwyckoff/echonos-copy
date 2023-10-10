const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Commodity extends Model {}

Commodity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commodityName: {
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
        modelName: 'commodity'
    }
)

module.exports = Commodity;