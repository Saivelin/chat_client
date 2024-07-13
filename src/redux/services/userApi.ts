import { ProfileType } from '@/entites/profile.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3032/api'
    }),
    endpoints: builder => ({
        registration: builder.mutation<ProfileType, any>({
            query: (data)=> ({url: `/auth/registration`, method: "POST", body: data}),
        }),
        login: builder.mutation<ProfileType, any>({
            query: (data)=> ({url: `/auth/login`, method: "POST", body: data}),
        }),
        getAllUsers: builder.query({
            query: () => ({url: "/users", method: "GET"})
        }),
        updateLastActive: builder.mutation<{id: number, date: string}, any>({
            query: (data) => ({url: "/users/online", method: "POST", body: data})
        })
    })
})

export const { useRegistrationMutation, useLoginMutation, useGetAllUsersQuery, useUpdateLastActiveMutation } = userApi
