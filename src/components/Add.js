import React, { useState } from 'react';

import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { Box } from '@mui/system';

// custom Modal
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// custom Box
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  // set varaibles for useState
  // initial state is false because the StyledModal is closed
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
      {/* condition provided for position left */}
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* StyledModal for tooltip */}
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="StyledModal-StyledModal-title"
        aria-describedby="StyledModal-StyledModal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="../images/user/asal-mshk-MhjkCZ_CgLU-unsplash.jpg"
            />
            <Typography fontWeight={500}>Bashir Salahuddin</Typography>
          </UserBox>

          <TextField
            sx={{
              width: '100%',
            }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
