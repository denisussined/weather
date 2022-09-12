import { Box, Typography } from "@mui/material";

const UVIndex = ({ uvIndex = 9 }) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        UV Index
      </Typography>
      <Box display={"flex"} justifyContent={"space-evenly"} paddingTop={3}>
        <Box>3</Box>
        <Box>6</Box>
        <Box>9</Box>
        <Box>12</Box>
      </Box>
      <Box height={"10px"} position={"relative"} bgcolor={"primary.main"}>
        <Box
          height={"14px"}
          width={`${(uvIndex / 15) * 100}%`}
          bgcolor={"custom.yellow"}
          sx={{ transform: "translateY(-2px)" }}
        />
      </Box>
    </>
  );
};

export default UVIndex;
