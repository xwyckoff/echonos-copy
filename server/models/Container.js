const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Container extends Model {}

Container.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'container'
    }
)

module.exports = Container;