import { Button } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const OpenDropButton = ({ handler }) => {
  return (
    <Button
      variant={"contained"}
      size={"small"}
      color={"secondary"}
      startIcon={<KeyboardArrowLeftRounded />}
      sx={{ display: { md: "none" } }}
      onClick={handler}
    >
      NOW
    </Button>
  );
};

export default OpenDropButton;
