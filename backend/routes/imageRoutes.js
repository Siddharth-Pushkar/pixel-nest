import express from 'express';
import Image from '../models/Image.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      caption: req.body.caption,
      imageUrl: req.file.path,
      location: req.body.location
    });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All
router.get('/', async (req, res) => {
  try {
    const images = await Image.find().sort({ date: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;