const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.post('/upload', (req, res) => { let fileData = '';
    req.on('data', chunk => {
        fileData += chunk.toString();
    });
    req.on('end', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Upload simulado com sucesso!');
    });})

app.use((req, res)=> {res.status(404).send('Página não encontrada')})

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
