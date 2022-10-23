import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';

import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import { useState } from 'react';

function App() {
  // initialize useState
  const [mode, setMode] = useState('light');

  // create dark mode
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />

        {/* Step 1: */}
        {/* create flexbox to setup three columns for sidebar, feed, and right bar */}
        {/* use justifycontent to align the stack items or the three columns horizontally */}
        {/* align-items align items vertically */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>

        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
