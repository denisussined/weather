import { Typography } from "@mui/material";

const WindStatus = ({ windSpeed = 18, windStatus = "Light breeze" }) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        Wind Status
      </Typography>
      <Typography
        variant={"h4"}
        component={"span"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.primary"}
      >
        {windSpeed}
        <Typography
          variant={"body1"}
          component={"span"}
          fontWeight={"bold"}
          color={"text.primary"}
        >
          {"  km/h"}
        </Typography>
      </Typography>
      <Typography variant={"body2"} textAlign={"center"} color={"text.primary"}>
        {windStatus}
      </Typography>
    </>
  );
};

export default WindStatus;
