import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mapRespondeData from '../util/mapResponseData';

interface resultObj {
  c: string;
  i: string;
}

const API_DOMAIN = process.env.API_DOMAIN || '';

export const searchAirportCodes = createAsyncThunk(
  'searchAirportCodes',
  async (searchTerm: string) => {
    try {
      const { data } = await axios.get(
        `${API_DOMAIN}/${process.env.REACT_APP_AIRPORT_ENDPOINT}?q=${searchTerm}`
      );
      const parsedData = JSON.parse(data.substring(1, data.length - 2)).r.map(
        (obj: resultObj) => obj.c
      );
      return mapRespondeData(parsedData);
    } catch (err) {
      console.log(err);
    }
  }
);
