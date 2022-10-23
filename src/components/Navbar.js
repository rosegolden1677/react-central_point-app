import React, { useState } from 'react';

import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import HikingIcon from '@mui/icons-material/Hiking';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

// customize personal toolbar with flex
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

// customize div into a searchbar
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

// customize div for icons & avatar
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  //gap is a component of flexbox
  gap: '20px',
  alignItems: 'center',
  // if the screen is small or bigger than display all icons
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

// customize div for avatar (mobile)
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  //gap is a component of flexbox
  gap: '10px',
  alignItems: 'center',
  // if the screen is small or bigger than display all icons
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  // initialize useState
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* website name */}
        <Typography
          variant="h6"
          // display if screen is small or bigger
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Central Point
        </Typography>
        {/* website logo */}
        <HikingIcon
          // display if screen is extra small
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />

        {/* search box */}
        {/* https://stackoverflow.com/questions/56122219/in-mui-when-do-we-use-input-vs-textfield-for-building-a-form */}
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        {/* icons */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="../images/user/asal-mshk-MhjkCZ_CgLU-unsplash.jpg"
            // click avatar to open dropdown menu
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        {/* icons for mobile */}
        <UserBox
          // click avatar to open dropdown menu for mobile
          onClick={(e) => setOpen(true)}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="../images/asal-mshk-MhjkCZ_CgLU-unsplash.jpg"
          />
          <Typography variant="span">Bashir</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        open={open}
        // closes dropdown when clicked elsewhere
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
