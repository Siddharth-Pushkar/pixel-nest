import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import UploadModal from './components/UploadModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get('/api/images');
        setImages(data);
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };
    fetchImages();
  }, []);

  const handleUpload = async (formData) => {
    try {
      const { data } = await axios.post('/api/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setImages([data, ...images]);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="app-container">
      <Header onUploadClick={() => setModalOpen(true)} />
      <ImageGrid images={images} />
      <UploadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleUpload}
      />
    </div>
  );
}