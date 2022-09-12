import { AppBar, Toolbar } from "@mui/material";
import {
  OpenDropButton,
  ChangeFormatButton,
  ChangeForecastButton,
} from "components/buttons";

const Header = () => {
  return (
    <AppBar
      color={"transparent"}
      elevation={0}
      sx={{ position: "static", p: 0 }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <OpenDropButton />
        <ChangeForecastButton sx={{ display: { xxs: "none", md: "block" } }} />
        <ChangeFormatButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
