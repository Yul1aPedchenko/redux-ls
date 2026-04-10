import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from '../../services/bookshelf-api';

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async (_, { rejectWithValue }) => {
    try {
      const authors = await bookShelfAPI.fetchAuthors();
      return authors;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
