import { ProfileType } from '@/components/Profile/profile.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3032/api'
    }),
    endpoints: builder => ({
        registration: builder.mutation<ProfileType, any>({
            query: (data)=> ({url: `/users`, method: "POST", body: data}),
        }),
    })
})

export const { useRegistrationMutation } = userApi
