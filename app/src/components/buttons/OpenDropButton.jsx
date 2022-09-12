import { Button } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const OpenDropButton = ({ openDrop }) => {
  return (
    <Button
      variant={"contained"}
      size={"small"}
      color={"secondary"}
      startIcon={<KeyboardArrowLeftRounded />}
      sx={{ display: { md: "none" } }}
      onClick={openDrop}
    >
      NOW
    </Button>
  );
};

export default OpenDropButton;
