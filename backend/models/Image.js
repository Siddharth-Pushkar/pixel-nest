import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: String
});

export default mongoose.model('Image', ImageSchema);