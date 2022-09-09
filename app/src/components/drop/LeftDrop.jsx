import { Drawer, Toolbar } from "@mui/material";
import Weather from "./weather/Weather";
import CloseDropButton from "../buttons/CloseDropButton";

const LeftDrop = () => {
  return (
    <Drawer
      open={true}
      anchor={"left"}
      variant={"persistent"}
      sx={{
        "& .MuiBackdrop-root": {
          display: "none",
        },
        "& .MuiDrawer-paper": {
          boxShadow: 1,
          width: `320px`,
          position: "absolute",
          left: "0",
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "end",
          display: { md: "none" },
        }}
      >
        <CloseDropButton />
      </Toolbar>
      <Weather />
    </Drawer>
  );
};

export default LeftDrop;
