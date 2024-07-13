import { ProfileType } from '@/entites/profile.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3032/api'
    }),
    tagTypes: ['CHAT'],
    endpoints: builder => ({
        getChatByMemberId: builder.query<ProfileType[], number>({
            query: (id)=> ({url: `/chat/user/${id}`, method: "GET"}),
            providesTags: result=>['CHAT']
        }),
        getChatByChatId: builder.query<any, number>({
            query: (id)=> ({url: `/chat/${id}`, method: "GET"}),
            providesTags: result=>['CHAT']
        }),
        getAllChats: builder.query<any, any>({
            query: ()=>({url: `/chat`, method: "GET"})
        }),
        createChat: builder.mutation<{members: number[], messages: any[]}, any>({
            query: (data)=> ({url: `/chat`, method: "POST", body: data}),
            invalidatesTags: ["CHAT"],
        }),
    })
})

export const { useGetChatByMemberIdQuery, useGetChatByChatIdQuery, useCreateChatMutation, useGetAllChatsQuery } = chatApi
