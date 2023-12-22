import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

interface HeaderProps {
  handleSearch?: (searchTerm: string) => void;
}

const Header = ({ handleSearch }: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color="primary">
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              marginRight: "5px",
              display: { sm: "block" },
            }}
          >
            DevFeed
          </Typography>

          {handleSearch && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon data-testid="search-icon" sx={{ color: "white" }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
