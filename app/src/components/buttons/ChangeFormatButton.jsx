import { Button, ButtonGroup } from "@mui/material";

const ChangeFormatButton = ({ format = "c", changeFormat }) => {
  return (
    <ButtonGroup color={"secondary"} size={"small"}>
      <Button
        variant={format === "c" ? "outlined" : "contained"}
        onClick={() => changeFormat("c")}
      >
        C
      </Button>
      <Button
        variant={format === "f" ? "outlined" : "contained"}
        onClick={() => changeFormat("f")}
      >
        F
      </Button>
    </ButtonGroup>
  );
};

export default ChangeFormatButton;
