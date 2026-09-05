import app from './app.js';

const PORT = 5000;

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutandose en http://localhost:${PORT}`
    );
});