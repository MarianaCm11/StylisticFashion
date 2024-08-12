require('dotenv').config();
const mysql = require('mysql2/promise');

class ConectarBD {
    constructor() {
        this.conexion = null;
    }

    async conectarMysql() {
        try {
            this.conexion = await mysql.createConnection({
                host:process.env.HOSTMYSQL,
                user:process.env.USERMYSQL,
                password:process.env.PASSWORDMYSQL,
                database:process.env.DATABASEMYSQL,
                port:process.env.PORTMYSQL
            });
            console.log('Conectado a MySQL');
        } catch (error) {
            console.error('Error al conectar con MySQL: ' + error.message);
        }
    }

    async cerrarConexion() {
        try {
            if (this.conexion) {
                await this.conexion.end();
                console.log('Conexión a MySQL cerrada');
            }
        } catch (error) {
            console.log('Error al desconectar MySQL: ' + error.message);
        }
    }
}

module.exports = ConectarBD;



module.exports=ConectarBD;