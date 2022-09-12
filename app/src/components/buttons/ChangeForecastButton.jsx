import { Button, ButtonGroup } from "@mui/material";
import { forecast } from "utils/variables";

const ChangeForecastButton = ({ forecastType, changeType, sx }) => {
  return (
    <ButtonGroup color={"secondary"} size={"small"} sx={sx}>
      <Button
        variant={forecastType === forecast.today ? "outlined" : "contained"}
        onClick={() => changeType(forecast.today)}
      >
        TODAY
      </Button>
      <Button
        variant={forecastType === forecast.week ? "outlined" : "contained"}
        onClick={() => changeType(forecast.week)}
      >
        WEEK
      </Button>
    </ButtonGroup>
  );
};

export default ChangeForecastButton;
