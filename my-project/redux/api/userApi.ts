import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from '../../typing'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = "https://api.themoviedb.org/3";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${TMDB_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string>({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
