import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '3fe04acf34msh49d3a43043ebcbfp12e160jsnf9f32d3630b5',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

const headerOptions = {
  "X-RapidAPI-Key": "3fe04acf34msh49d3a43043ebcbfp12e160jsnf9f32d3630b5",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createUrl = (url) => ({ url, headers: headerOptions });

export const apicall = createApi({
  reducerPath: "apicall",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => createUrl("/xyz"),
    }),
  }),
});

export const {useGetDataQuery} = createApi;

