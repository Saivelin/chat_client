'use client'

import { PropsWithChildren } from 'react'

import '../../i18n'
import ReduxProvider from './redux-provider'

export default function Providers({ children }: PropsWithChildren<any>) {
    return <ReduxProvider>{children}</ReduxProvider>
}
