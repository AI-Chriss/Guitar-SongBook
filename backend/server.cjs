const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas URI
const mongoURI = "mongodb+srv://lewandowskikrzysztof433:0i23456789A@44@songbookdb.ub2ub.mongodb.net/?retryWrites=true&w=majority&appName=songbookDB";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define a simple schema
const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  lyrics: String,
  rhythm: String,
});

const Song = mongoose.model('Song', songSchema);

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Songbook API');
});

app.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post route to add a new song
app.post('/songs', async (req, res) => {
  const song = new Song({
    name: req.body.name,
    artist: req.body.artist,
    lyrics: req.body.lyrics,
    rhythm: req.body.rhythm,
  });

  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


