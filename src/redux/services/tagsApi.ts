import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Tag = {
    id: number
    title: string
    value: string
}

type TagDto = {
    id: number
    title: string
    value: string
}

export const tagsApi = createApi({
    reducerPath: 'tagsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3032/api'
    }),
    endpoints: builder => ({
        getTag: builder.query<Tag, { id: number }>({
            query: id => ({ url: `/tag/${id}` })
        }),
        getAllTags: builder.query<Tag[], void>({
            query: () => ({ url: '/tag' })
        }),
        createTag: builder.mutation<any, TagDto>({
            query: (data)=> ({url: `/tag`, method: "POST", body: data}),
        }),
        deleteTagsByIds: builder.mutation<any, any>({
            query: (data)=> ({url: `/tag/delete-by-ids`, method: "POST", body: data}),
        }),
    })
})

export const { useGetTagQuery, useGetAllTagsQuery, useCreateTagMutation, useDeleteTagsByIdsMutation } = tagsApi
