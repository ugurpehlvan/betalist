import React from 'react';

// components
import { 
    AppBar, 
    Toolbar,
    Typography,
    InputBase,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
            beta
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon sx={{ ml: 1 }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;