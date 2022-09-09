import { AppBar, Toolbar } from "@mui/material";
import OpenDropButton from "../buttons/OpenDropButton";
import ChangeForecastButton from "../buttons/ChangeForecastButton";
import ChangeFormatButton from "../buttons/ChangeFormatButton";

const Header = () => {
  return (
    <AppBar
      color={"transparent"}
      elevation={0}
      sx={{ position: "static", padding: "0" }}
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
