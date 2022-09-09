import { createTheme } from "@mui/material";
import { blue, grey, red, yellow } from "@mui/material/colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 385,
      sm: 570,
      md: 768,
      lg: 900,
      xl: 1200,
      xxl: 1536,
    },
  },
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: grey[800],
    },
    custom: {
      yellow: yellow[700],
      blue: blue[600],

      lightRed: red[300],
      lightBlue: blue[300],
      lightGrey: grey[200],
    },
  },
});
