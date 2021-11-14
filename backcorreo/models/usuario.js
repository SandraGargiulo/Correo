'use strict'; module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        idUser: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'usuario',
        classMethods: {}
    }); Usuario.associate = function (models) {
        // associations can be defined here
    }; return Usuario;
};