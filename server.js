import jsonServer from 'json-server';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// Create require function for JSON imports
const require = createRequire(import.meta.url);

// ES Modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON files
const catData = require('./db/cat.json');
const productData = require('./db/product.json');
const userData = require('./db/user.json');

// Create server
const server = express();
const router = jsonServer.router({
  cats: catData,
  products: productData,
  users: userData
});

// Middlewares
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// API routes
server.use('/api', router);

// Serve static React files
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
