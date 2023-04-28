const express = require('express');
const app = express();

const imageRoutes = require('./routes/imageRoutes');

app.use('/api', imageRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
