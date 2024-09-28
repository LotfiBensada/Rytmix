const express = require("express");
const connectDB = require("./config/db"); // Fichier de connexion MongoDB
const dotenv = require("dotenv");

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
// connectDB();

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

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

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Link : http://localhost:${PORT}`)
});
