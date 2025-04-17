import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Modal, Box } from '@mui/material';

export default function ImageGrid({ images }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((img) => (
          <div
            key={img._id}
            className="image-item"
            onClick={() => setSelectedImg(img.imageUrl)}
          >
            <LazyLoadImage
              src={`http://localhost:5000/${img.imageUrl}`}
              alt={img.caption}
              effect="opacity"
              style={{ width: '100%', borderRadius: 8 }}
            />
            <div className="image-caption">{img.caption}</div>
          </div>
        ))}
      </Masonry>

      <Modal open={!!selectedImg} onClose={() => setSelectedImg(null)}>
        <Box sx={{ outline: 'none' }}>
          <img
            src={`http://localhost:5000/${selectedImg}`}
            alt="Enlarged"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}