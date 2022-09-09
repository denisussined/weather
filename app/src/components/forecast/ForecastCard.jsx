import { Card, CardContent, Typography } from "@mui/material";
import { cloudyNight2 } from "images";

const ForecastCard = ({
  day = "Monday",
  image = cloudyNight2,
  temperatureMin = 5,
  temperatureMax = 8,
}) => {
  return (
    <Card
      variant={"outlined"}
      sx={{
        minWidth: "110px",
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant={"body2"}>{day}</Typography>
        <img
          src={image}
          alt={"img"}
          style={{ height: "80px", width: "80px" }}
        />
        <Typography variant={"body2"}>
          {`${temperatureMin}° ${temperatureMax}°`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
