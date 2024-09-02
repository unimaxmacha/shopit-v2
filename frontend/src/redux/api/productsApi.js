import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => ({
                url: "/products",
                params: {
                    keyword: params?.keyword,
                    page: params?.page,
                    "price[gte]": params.min,
                    "price[lte]": params.max,
                },
            }),
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;
