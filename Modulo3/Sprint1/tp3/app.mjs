import express from "express";

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
})

// Solicitud: http://localhost:3000/user/10
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Solicitud: http://localhost:3000/profile?edad=10
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`); 
    res.send(`Edad del perfil: ${edad}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})