const express = require("express");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const { createServer } = require('http');

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
// connectDB();

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>API Test</title>
        </head>
        <body>
          <h1>Bienvenue sur l'API de musique!</h1>
          <p>Tout fonctionne correctement !</p>
        </body>
      </html>
    `);
});

// Exporter le serveur pour Vercel
module.exports = app;
