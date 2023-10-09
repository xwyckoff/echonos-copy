const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Part extends Model {}

Part.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commodity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mfg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mpn: {
            type: DataTypes.STRING
        },
        ipn: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        assetTag: {
            type: DataTypes.STRING,
        },
        createEchotag: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        echotag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serial: {
            type: DataTypes.STRING
        },
        parentEchotag: {
            type: DataTypes.STRING
        },
        createdBy: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        tableName: 'parts'
    }
)