const bcrypt = require('bcrypt');
const ConectarBD = require('./ConectarBD');

class BaseBD extends ConectarBD {
    constructor() {
        super();
    }

    async registrarUsuario(usuario, correo, contrasena) {
        await this.conectarMysql(); // Usa this.conectarMysql() para la instancia actual
        try {
            const hashedPassword = await bcrypt.hash(contrasena, 10);
            const query = 'INSERT INTO usuarios (usuario, correo, contrasena) VALUES (?, ?, ?)';
            const [result] = await this.conexion.execute(query, [usuario, correo, hashedPassword]);
            console.log("Usuario registrado:", result);
            return result;
        } catch (error) {
            console.error("Error al registrar usuario: " + error.message);
            throw error;
        } finally {
            await this.cerrarConexion(); // Usa this.cerrarConexion() para la instancia actual
        }
    }

    async obtenerUsuarioPorCorreo(correo) {
        await this.conectarMysql(); // Usa this.conectarMysql() para la instancia actual
        try {
            const query = 'SELECT * FROM usuarios WHERE correo = ?';
            const [results] = await this.conexion.execute(query, [correo]);
            console.log("Usuario obtenido:", results);
            return results;
        } catch (error) {
            console.error("Error al obtener usuario: " + error.message);
            throw error;
        } finally {
            await this.cerrarConexion(); // Usa this.cerrarConexion() para la instancia actual
        }
    }

    async actualizarPerfil(id, usuario, correo, contrasena, fotoRuta) {
        await this.conectarMysql();
        try {
            let hashedPassword = contrasena;
            if (contrasena) {
                console.log('Contraseña antes de hash:', contrasena);
                hashedPassword = await bcrypt.hash(contrasena, 10);
                console.log('Hash generado:', hashedPassword);
            }
    
            const rutaCompletaFoto = fotoRuta ? fotoRuta : null;
    
            let query = 'UPDATE usuarios SET usuario = ?, correo = ?';
            let params = [usuario, correo];
    
            if (hashedPassword) {
                query += ', contrasena = ?';
                params.push(hashedPassword);
            }
    
            if (rutaCompletaFoto) {
                query += ', foto = ?';
                params.push(rutaCompletaFoto);
            }
    
            query += ' WHERE id = ?';
            params.push(id);
    
            const [result] = await this.conexion.execute(query, params);
            console.log('Resultado de la actualización:', result);
            
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error actualizando el perfil:', error.message);
            throw error;
        } finally {
            await this.cerrarConexion();
        }
    }
    
    
        async obtenerUsuarioPorId(id) {
            await this.conectarMysql();
            try {
                console.log(`Consultando usuario con ID: ${id}`); // Depuración
                const [rows] = await this.conexion.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
                console.log('Resultado de la consulta:', rows); // Depuración
                return rows[0]; // Devuelve el primer resultado
            } catch (error) {
                console.error("Error obteniendo usuario por ID: " + error.message);
                throw error;
            } finally {
                await this.cerrarConexion();
            }
        }
        
}

module.exports = BaseBD;
 
