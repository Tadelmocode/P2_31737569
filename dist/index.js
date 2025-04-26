import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// Obtiene el equivalente a __dirname en ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));
// Configuración básica de Express
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
// Ruta única para la landing page
app.get('/', (req, res) => {
    res.render('index');
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:', PORT);
});
