const express = require('express');
const dbConection = require('./database/config');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.tareaRoutePath = '/api/tarea';

        // Midlewares: funciones que siempre se van a ejecutar cuando iniciamos un servidor
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async syncDB() {
        try {
            
            await dbConection.sync({
                force: true
            }).then(() => {
                const init = require('./config/init.config');
                init.initial();
                console.log('Sincronización exitosa');
            });

        } catch (error) {
            console.log(error)
        }
    }
 
    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición

        // Directorio público
        this.app.use( express.static('public') );

    }

   // Endpoints 
    routes() {
        this.app.use(this.tareaRoutePath, require('./routes/tarea.routes'));
    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto: ', this.port );
        });
    }

}

module.exports = Server;