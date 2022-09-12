import { Button, ButtonGroup } from "@mui/material";
import { temperature } from "utils/variables";

const ChangeFormatButton = ({ temperatureFormat, changeFormat }) => {
  return (
    <ButtonGroup color={"secondary"} size={"small"}>
      <Button
        variant={
          temperatureFormat === temperature.celsius ? "outlined" : "contained"
        }
        onClick={() => changeFormat(temperature.celsius)}
      >
        C
      </Button>
      <Button
        variant={
          temperatureFormat === temperature.fahrenheit
            ? "outlined"
            : "contained"
        }
        onClick={() => changeFormat(temperature.fahrenheit)}
      >
        F
      </Button>
    </ButtonGroup>
  );
};

export default ChangeFormatButton;
