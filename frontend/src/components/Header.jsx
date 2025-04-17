import { AppBar, Toolbar, Button } from '@mui/material';
import { Upload } from '@mui/icons-material';

export default function Header({ onUploadClick }) {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Public</Button>
          <Button color="inherit">Personal</Button>
          <Button color="inherit">Contact</Button>
        </div>
        <Button
          variant="contained"
          startIcon={<Upload />}
          onClick={onUploadClick}
        >
          Upload
        </Button>
      </Toolbar>
    </AppBar>
  );
}