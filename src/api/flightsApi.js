import axios from 'axios';

export const getToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', 'G9XmxXpuCohSWvLuyP3T0MLKT7vOfB2d');
  params.append('client_secret', 'awSSXy0H8zLHtNaD');
  const resp = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', params);

  localStorage.setItem('token', resp.data.access_token);
};

const flightsApi = axios.create({
  baseURL: 'https://test.api.amadeus.com/'
});

export default flightsApi;
