import axios from 'axios';

const flightsApi = axios.create({
  baseURL: 'https://test.api.amadeus.com/',
  headers: {
    Authorization: `Bearer u8mfJ2gR4RmTwjHQtrnvnYDaIdQR`
  }
});

export default flightsApi;
