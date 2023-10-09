const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ContainerContents extends Model {};

ContainerContents.init(
    {
        containerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        partID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'containerContents'
    }
)