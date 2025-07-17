const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Handle contact form post
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

const PORT = 9955;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
