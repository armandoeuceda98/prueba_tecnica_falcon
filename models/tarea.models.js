const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Tarea = dbConection.define("tarea", {
    idTarea: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreTarea: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    estado: {
        type: DataTypes.ENUM('Pendiente', 'En Progreso', 'Completada')
    },
    fechaEntrega: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Tarea;