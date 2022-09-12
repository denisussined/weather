import { Card, CardContent, Grid } from "@mui/material";

const HighlightsCard = ({ children }) => {
  return (
    <Grid item xxs={1}>
      <Card
        variant={"outlined"}
        sx={{
          height: "150px",
          width: "100%",
          minWidth: "170px",
          borderRadius: 3,
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HighlightsCard;
