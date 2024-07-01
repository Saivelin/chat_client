import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query' 
import { tagsApi } from './services/tagsApi'
import { userApi } from './services/userApi'

export const store = configureStore({
    reducer: {
        [tagsApi.reducerPath]: tagsApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([
            tagsApi.middleware,
            userApi.middleware
        ]),
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
