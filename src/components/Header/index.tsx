import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

interface HeaderProps {
  handleSearch?: (searchTerm: string) => void;
}

export default function Header({ handleSearch }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color="primary">
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            DevFeed
          </Typography>

          {handleSearch && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "white" }} />
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
}
