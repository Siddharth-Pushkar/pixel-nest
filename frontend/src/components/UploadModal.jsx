import { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function UploadModal({ open, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    caption: '',
    location: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('caption', formData.caption);
    data.append('location', formData.location);
    data.append('image', formData.image);
    onSubmit(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Caption"
            required
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            required
            style={{ margin: '20px 0' }}
            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          />
          <Button type="submit" variant="contained" fullWidth>
            Upload
          </Button>
        </form>
      </Box>
    </Modal>
  );
}