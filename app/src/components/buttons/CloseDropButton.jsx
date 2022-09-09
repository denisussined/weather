import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CloseDropButton = ({ handler }) => {
  return (
    <IconButton size={"large"} color={"secondary"} onClick={handler}>
      <CloseRounded />
    </IconButton>
  );
};

export default CloseDropButton;
