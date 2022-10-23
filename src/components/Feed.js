import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    /* use flex to give the feed column a width */
    /* use p to give the column some padding */
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
