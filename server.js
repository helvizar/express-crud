const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/index')

const app = express();
const port = 8000;

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Route setup
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');

app.use('/', routes);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
