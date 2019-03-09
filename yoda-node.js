const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Run the Yoda app, this page has.')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});