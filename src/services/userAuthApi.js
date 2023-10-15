import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',

    baseQuery: fetchBaseQuery({
        baseUrl: "http://fair-hen-bracelet.cyclic.app/api/user"
    }),

    endpoints: (builder) => ({
        
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})

export const { useRegisterUserMutation } = userAuthApi
