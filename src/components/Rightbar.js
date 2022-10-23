import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    /* use flex to give the Rightbar column a width */
    /* use p to give the column some padding */
    <Box
      flex={2}
      p={2}
      // display if screen is small or bigger
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" width={300}>
        
        {/* online friends section */}
        <Typography
          variant="h6"
          fontWeight={100}
        >
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="online friend" src="../images/avatar/Person1.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person2.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person3.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person4.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person5.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person6.jpg" />
          <Avatar alt="online friend" src="../images/avatar/Person7.jpg" />
          <Avatar alt="online friend" src="" />
          <Avatar alt="online friend" src="" />
          <Avatar alt="online friend" src="" />
        </AvatarGroup>

        {/* latest photos section */}
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img 
              src="../images/posts/post1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img 
              src="../images/posts/post2.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img 
              src="../images/posts/post3.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        {/* conversations section */}
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
        >
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="../images/avatar/Person5.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="../images/avatar/Person7.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="../images/avatar/Person4.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      </Box>
    </Box>
  );
};

export default Rightbar;
