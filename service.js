const express = require('express');
const path =  require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('./mp3', express.static(path.join(__dirname, 'media/mp3')));
app.use('./imgs', express.static(path.join(__dirname, 'media/imgs')));

app.get('/', (req, res) => {
  res.send('Music backend is running! 🎶');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});