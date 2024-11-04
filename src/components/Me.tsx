import React, { useState } from 'react';
import { Box, Typography, Button, TextField, List, ListItem } from '@mui/material';

interface MeProps {
  name: string;
}

const Me: React.FC<MeProps> = ({ name }) => {
  const hobbies = ['Autod', 'Restaureerimine', 'Arvutimängud', 'Kalastamine'];

  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 4, backgroundColor: '#f0f4f8', borderRadius: 2, boxShadow: 3 }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        {name}
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Minu hobid
      </Typography>
      <List>
        {hobbies.map((hobby, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{hobby}</Typography>
          </ListItem>
        ))}
      </List>

      <form className="contact-form" style={{ width: '100%', maxWidth: 400 }} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Email"
          name="email" 
          value={formData.email} 
          onChange={handleChange}
        />
        <TextField
          label="Sõnum"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Kirjuta midagi"
          name="message" 
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >Saada</Button>
      </form>
    </Box>
  );
};

export default Me;
