const Tarea = require("../models/tarea.models");


exports.initial = async () => {
    try {
        await Tarea.create({
            idTarea: 1,
            nombreTarea: "Tarea 1",
            descripcion: "Tarea de prueba inicial",
            estado: "Pendiente",
        });
        
    } catch (error) {
        console.log(error);
    }
};
