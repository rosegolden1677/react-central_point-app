import React from 'react';

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';

const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        {/* header */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'green' }} aria-label="foodie">
              F
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Gelato and Street Food"
          subheader="May 24, 2022"
        />

        {/* image */}
        <CardMedia
          component="img"
          height="20%"
          image="../images/user/chris-andrawes-m54D3zFeqow-unsplash.jpg"
          alt="Gelato"
        />

        {/* text */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Commodo ut Lorem occaecat officia ea ullamco sunt enim incididunt
            exercitation enim. Excepteur magna exercitation esse quis esse quis.
            Sint sit deserunt sit enim consectetur velit ullamco sunt
            consectetur proident in excepteur aliqua irure. Dolore reprehenderit
            aliquip aliquip esse adipisicing ex officia quis cupidatat. Veniam
            pariatur anim fugiat tempor deserunt laboris velit aliqua.
            Incididunt excepteur ea dolore cillum et amet tempor laborum officia
            eu fugiat laborum ex cillum. In culpa velit dolor aliqua irure qui
            do eu aute et labore.
          </Typography>
        </CardContent>

        {/* buttons */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
