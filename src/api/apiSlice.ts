import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Image } from "../ts-utils/image";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://picsum.photos/v2/" }),
  endpoints: (builder) => ({
    getImages: builder.query<Image[], void>({
      query: () => "list?page=1&limit=20",
    }),
  }),
});

export const { useGetImagesQuery } = apiSlice;
