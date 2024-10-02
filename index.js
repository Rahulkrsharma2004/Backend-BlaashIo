const express = require('express');
const app = express();
require('dotenv').config();

const collectionsRoutes = require('./routes/collections');
const postsRoutes = require('./routes/posts');
const productsRoutes = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/api', collectionsRoutes);
app.use('/api', postsRoutes);
app.use('/api', productsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

