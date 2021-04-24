// Dependencies
// ===========================================================
const express = require('express');
const path = require("path");

const app = express();
const PORT = 3001 || process.env.PORT;

// Data
// ===========================================================
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Create a GET route `/api/characters` that returns all of the characters
app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

// Create just one GET route that returns any given specific character
app.get('/api/characters/:forceMin', (req, res) => {
  const chosen = characters.filter(item => item.forcePoints >= req.params.forceMin);
  console.log(chosen);

//   // Iterate through the characters' routeNames to check if it matches `req.params.character`
//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }
  
    
    if (chosen) return res.send(chosen);
    return res.send('No character found');
});

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
