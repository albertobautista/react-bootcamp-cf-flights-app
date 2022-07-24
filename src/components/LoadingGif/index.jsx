import { CircularProgress, Grid } from '@mui/material';

export const LoadingGif = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ padding: 5 }}>
      <Grid item justifyContent="center">
        <CircularProgress color="primary" size="70px" />
      </Grid>
    </Grid>
  );
};
