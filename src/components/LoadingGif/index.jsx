import { CircularProgress, Grid } from '@mui/material';

export const LoadingGif = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 5 }}>
      <Grid item direction="row" justifyContent="center">
        <CircularProgress color="primary" size="70px" />
      </Grid>
    </Grid>
  );
};
