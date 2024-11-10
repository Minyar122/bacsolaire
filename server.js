// Importer les modules nécessaires
const express = require('express');
const cors = require('cors'); // Pour autoriser les requêtes cross-origin
const bodyParser = require('body-parser');

// Initialiser l'application Express
const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Données d'exemple (liste des objets du système solaire)
const solarSystemData = [
  { id: 1, name: 'Mars', imageUrl: 'https://space-facts.com/wp-content/uploads/mars.jpg', views: 270 },
  { id: 2, name: 'Jupiter', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg', views: 200 },
  { id: 3, name: 'Mercure', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg', views: 270 },
  { id: 4, name: 'Saturne', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Saturn_Earth_Comparison.png', views: 200 }
];

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend du système solaire!');
});

// Route pour récupérer les données du système solaire
app.get('/solar-system', (req, res) => {
  res.json(solarSystemData);
});

// Route de recherche
app.get('/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: 'La requête de recherche est vide' });
  }
  
  const results = solarSystemData.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  res.json(results);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
