import { Button, ButtonGroup } from "@mui/material";

const ChangeForecastButton = ({ forecastType = "today", changeType, sx }) => {
  return (
    <ButtonGroup color={"secondary"} size={"small"} sx={sx}>
      <Button
        variant={forecastType === "today" ? "outlined" : "contained"}
        onClick={() => changeType("today")}
      >
        TODAY
      </Button>
      <Button
        variant={forecastType === "week" ? "outlined" : "contained"}
        onClick={() => changeType("week")}
      >
        WEEK
      </Button>
    </ButtonGroup>
  );
};

export default ChangeForecastButton;
