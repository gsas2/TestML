const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const ItemsController = require('./controllers/ItemsController');
   
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/items', ItemsController.getItems);
app.get('/api/items/:id', ItemsController.getItem);

app.listen(port, () => console.log(`Listening on port ${port}`));
