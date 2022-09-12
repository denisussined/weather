import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";
import LeftDrop from "components/drop/LeftDrop";
import Header from "components/header/Header";
import Forecast from "components/forecast/Forecast";
import Highlights from "components/highlights/Highlights";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          maxWidth={{ lg: "1014px" }}
          mx={"auto"}
          bgcolor={"custom.lightGrey"}
        >
          <Box position={"relative"} minHeight={"100vh"}>
            <LeftDrop />
            <Box
              px={3}
              ml={{ md: "320px" }}
              width={{ md: "calc(100% - 320px)" }}
            >
              <Header />
              <Forecast />
              <Highlights />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
