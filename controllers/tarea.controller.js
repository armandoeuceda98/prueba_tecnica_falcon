const { request, response } = require('express');

const Tarea = require('../models/tarea.models');

// Trae todas las tareas
const tareaAllGet = async (req = request, res = response) => {
    try {
        const tareas = await Tarea.findAll();

        return res.status(200).send({
            tareas
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrió un error: " + error
        });
    }
};

const tareaPost = async (req = request, res) => {
    const { nombreTarea, descripcion, estado, fechaEntrega } = req.body;
    try {
        const tarea = await Tarea.create({
            nombreTarea: nombreTarea,
            descripcion: descripcion,
            estado: estado,
            fechaEntrega: fechaEntrega
        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            tarea
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrió un error: " + error
        });
    }
};

const tareaPut = async (req = request, res) => {
    const { idTarea, nombreTarea, descripcion, estado, fechaEntrega } = req.body;
    try {
        const tarea = await Tarea.update({
            nombreTarea: nombreTarea,
            descripcion: descripcion,
            estado: estado,
            fechaEntrega: fechaEntrega
        }, {
            where: {
                idTarea: idTarea
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            tarea
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrió un error: " + error
        });
    }
};

const tareaDelete = async (req, res) => {
    const { idTarea } = req.body;
    try {
        const tarea = await Tarea.destroy({
            where: {
                idTarea: idTarea
            }
        });

        return res.status(200).send({
            message: "Eliminado con éxito.",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrió un error: " + error
        });
    }
};

module.exports = {
    tareaAllGet,
    tareaPost,
    tareaPut,
    tareaDelete
};
