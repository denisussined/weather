import { Typography } from "@mui/material";

const Visibility = ({
  visibilityDistance = 10,
  visibilityStatus = "Good visibility",
}) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        Visibility
      </Typography>
      <Typography
        variant={"h4"}
        component={"span"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"text.primary"}
      >
        {visibilityDistance}
        <Typography
          variant={"body1"}
          component={"span"}
          fontWeight={"bold"}
          color={"text.primary"}
        >
          {"  km"}
        </Typography>
      </Typography>
      <Typography variant={"body2"} textAlign={"center"} color={"text.primary"}>
        {visibilityStatus}
      </Typography>
    </>
  );
};

export default Visibility;
