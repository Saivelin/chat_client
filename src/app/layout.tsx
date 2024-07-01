import ReduxProvider from "@/redux/redux-provider"
import "./app.scss"

export const metadata = {
    title: 'Chat',
    description: 'My chat app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon_chat.ico"/>
            </head>
            <body>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}
