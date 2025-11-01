const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files
app.use('/mp3', express.static(path.join(__dirname, 'media/mp3')));
app.use('/imgs', express.static(path.join(__dirname, 'media/imgs')));

// API endpoint to get track information
app.get('/api/tracks', (req, res) => {
  const tracks = [
    {
      id: 1,
      artist: 'Artist 1',
      name: 'Bloom',
      filename: 'bloom.mp3',
      image: 'woodland-bloom.jpg',
      gradient: '#ffc4ee, #ead1fc, #dadcff, #d5e5fb, #dceaf3'
    },
    {
      id: 2,
      artist: 'Artist 2',
      name: 'Little Talks',
      filename: 'little-talks.mp3',
      image: 'littletalks-mountainsound.jpg',
      gradient: '#8bd0ff, #a4daff, #bbe3ff, #d2edff, #e8f6ff'
    },
    {
      id: 3,
      artist: 'Artist 3',
      name: 'Mountain Sound',
      filename: 'mountain-sound.mp3',
      image: 'littletalks-mountainsound.jpg',
      gradient: '#ffaff1, #ffb5cb, #ffc8ae, #ffe1a6, #f0f8b8'
    },
    {
      id: 4,
      artist: 'Artist 4',
      name: 'The Night We Met',
      filename: 'the-night-we-met.mp3',
      image: 'thenightwemet.jpg',
      gradient: '#f0f8b8, #dceaf3, #d5e5fb, #dadcff, #ead1fc'
    },
    {
      id: 5,
      artist: 'Artist 5',
      name: 'Woodland',
      filename: 'woodland.mp3',
      image: 'woodland-bloom.jpg',
      gradient: '#d2edff, #e8f6ff, #d5e5fb, #dadcff, #ffc4ee'
    }
  ];
  res.json(tracks);
});

app.get('/', (req, res) => {
  res.send('Music backend is running! 🎶');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});