//Se importa el framework express
import express from 'express';
//Se importa el conjunto de rutas definidas en contestRoutes.ts
import contestRoutes from './routes/contestRoutes'

//Se crea instancia de una aplicación express
const app = express();
//Se define el puerto
const PORT = 3000;

//app.use es un middleware para manejar rutas
//El primer argumento es el prefijo de la ruta /api
//URL completa http://localhost:3000/api/combined-info/:contestId/:berryId
app.use('/api', contestRoutes);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});