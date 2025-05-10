const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

// Create server
const server = express();
const router = jsonServer.router({
  products: require('./db/product.json'),
  users: require('./db/user.json')
});

// Middlewares
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// API routes
server.use('/api', router);

// Serve static React files (from Vite build)
server.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`
  Server running on port ${PORT}
  React app: http://localhost:${PORT}
  API Endpoints:
  - Cats: http://localhost:${PORT}/api/cats
  - Products: http://localhost:${PORT}/api/products
  - Users: http://localhost:${PORT}/api/users
  `);
});
