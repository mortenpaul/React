import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h6" component="div">
              Morten's App
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                color="inherit"
                component={NavLink}
                to="/"
                sx={{ '&.active': { fontWeight: 'bold', color: 'yellow' } }}
              >
                Avaleht
              </Button>
              <Button
                color="inherit"
                component={NavLink}
                to="/login"
                sx={{ '&.active': { fontWeight: 'bold', color: 'yellow' } }}
              >
                Logi sisse
              </Button>
              <Button
                color="inherit"
                component={NavLink}
                to="/about"
                sx={{ '&.active': { fontWeight: 'bold', color: 'yellow' } }}
              >
                Minust
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
