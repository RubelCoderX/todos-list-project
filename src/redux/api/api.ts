import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({baseUrl:})
})