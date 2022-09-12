import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CloseDropButton = ({ closeDrop }) => {
  return (
    <IconButton size={"large"} color={"secondary"} onClick={closeDrop}>
      <CloseRounded />
    </IconButton>
  );
};

export default CloseDropButton;
