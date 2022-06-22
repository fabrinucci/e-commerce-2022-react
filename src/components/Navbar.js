import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png';
import { Badge, styled } from '@mui/material';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: "7rem" }}>
      <AppBar sx={ { boxShadow: "none", backgroundColor: "whitesmoke"} } position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1, height: "2rem"}}
          >
            CUTT events
          </IconButton>
          <Typography variant="h6" color="primary" component="p" sx={{ flexGrow: 1 }}>
            Hello Guest
          </Typography>
          <div sx={{}}>
            <Button variant='outlined'>
              <strong>Sign In</strong>
            </Button>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <AddShoppingCart fontSize='large' color='primary' />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
