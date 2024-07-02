import { ProfileType } from '@/components/Profile/profile.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3032/api'
    }),
    endpoints: builder => ({
        getChatByMemberId: builder.query<ProfileType[], number>({
            query: (id)=> ({url: `/chat/user/${id}`, method: "GET"}),
        }),
        getChatByChatId: builder.query<any, number>({
            query: (id)=> ({url: `/chat/${id}`, method: "GET"}),
        }),
    })
})

export const { useGetChatByMemberIdQuery, useGetChatByChatIdQuery } = chatApi
