import { Grid, TextField, Button, Autocomplete } from '@mui/material';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { airportsFiltered } from '../../data/airports';
import { useDispatch } from 'react-redux';
import { fetchFlights } from '../../store/flights/thunks';

const validationSchema = yup.object({
  originLocationCode: yup.string().required('Este campo es requerido'),
  destinationLocationCode: yup.string().required('Este campo es requerido'),
  departureDate: yup.string().required('Este campo es requerido'),
  returnDate: yup.string(),
  adults: yup
    .number()
    .min(1, 'Mínimo 1.')
    .max(9, 'Máximo 9')
    .integer('El valor debe ser un número entero')
    .required('Este campo es requerido'),
  children: yup.number().max(9, 'Máximo 9').integer('El valor debe ser un número entero')
});

export const SearchForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      originLocationCode: '',
      destinationLocationCode: '',
      departureDate: '',
      returnDate: '',
      adults: 1,
      children: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSearchFlights(values);
    }
  });

  const handleSearchFlights = (datos) => {
    dispatch(fetchFlights(datos));
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <Autocomplete
            disablePortal
            id="originLocationCode"
            options={airportsFiltered}
            onChange={(e, value) => formik.setFieldValue('originLocationCode', value?.code || '')}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Origen"
                error={
                  formik.touched.originLocationCode && Boolean(formik.errors.originLocationCode)
                }
                helperText={formik.touched.originLocationCode && formik.errors.originLocationCode}
              />
            )}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Autocomplete
            id="destinationLocationCode"
            options={airportsFiltered}
            onChange={(e, value) =>
              formik.setFieldValue('destinationLocationCode', value?.code || '')
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destino"
                error={
                  formik.touched.destinationLocationCode &&
                  Boolean(formik.errors.destinationLocationCode)
                }
                helperText={
                  formik.touched.destinationLocationCode && formik.errors.destinationLocationCode
                }
              />
            )}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            id="departureDate"
            name="departureDate"
            size="small"
            type="date"
            label="Ida"
            inputProps={{
              min: moment().format('YYYY-MM-DD')
            }}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={formik.values.departureDate}
            onChange={formik.handleChange}
            error={formik.touched.departureDate && Boolean(formik.errors.departureDate)}
            helperText={formik.touched.departureDate && formik.errors.departureDate}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            id="returnDate"
            name="returnDate"
            size="small"
            type="date"
            label="Regreso"
            inputProps={{
              min: moment().format('YYYY-MM-DD')
            }}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={formik.values.returnDate}
            onChange={formik.handleChange}
            error={formik.touched.returnDate && Boolean(formik.errors.returnDate)}
            helperText={formik.touched.returnDate && formik.errors.returnDate}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            id="adults"
            name="adults"
            size="small"
            type="number"
            label="Adultos"
            inputProps={{
              min: 1,
              max: 9
            }}
            fullWidth
            value={formik.values.adults}
            onChange={formik.handleChange}
            error={formik.touched.adults && Boolean(formik.errors.adults)}
            helperText={formik.touched.adults && formik.errors.adults}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            id="children"
            name="children"
            size="small"
            type="number"
            label="Niños"
            inputProps={{
              min: 0,
              max: 9
            }}
            fullWidth
            value={formik.values.children}
            onChange={formik.handleChange}
            error={formik.touched.children && Boolean(formik.errors.children)}
            helperText={formik.touched.children && formik.errors.children}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <Button variant="contained" fullWidth type="submit" color="primary">
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
