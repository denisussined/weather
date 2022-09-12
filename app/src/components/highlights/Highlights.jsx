import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import HighlightsCard from "./HighlightsCard";
import UVIndex from "./cards/UVIndex";
import WindStatus from "./cards/WindStatus";
import Visibility from "./cards/Visibility";
import SunriseSunset from "./cards/SunriseSunset";
import Humidity from "./cards/Humidity";
import Temperature from "./cards/Temperature";

const Highlights = () => {
  return (
    <>
      <Typography variant={"body1"} fontWeight={"bold"} py={2}>
        Today`s Highlights
      </Typography>
      <Grid
        item
        container
        spacing={2}
        columns={{ xxs: 1, xs: 2, sm: 3, md: 2, lg: 3 }}
      >
        <HighlightsCard>
          <UVIndex />
        </HighlightsCard>
        <HighlightsCard>
          <WindStatus />
        </HighlightsCard>
        <HighlightsCard>
          <SunriseSunset />
        </HighlightsCard>
        <HighlightsCard>
          <Humidity />
        </HighlightsCard>
        <HighlightsCard>
          <Visibility />
        </HighlightsCard>
        <HighlightsCard>
          <Temperature />
        </HighlightsCard>
      </Grid>
      <Box py={2}>
        <Card variant={"outlined"} sx={{ height: "200px", borderRadius: 3 }}>
          <CardContent>MAP</CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Highlights;
