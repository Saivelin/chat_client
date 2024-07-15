import ReduxProvider from "@/redux/redux-provider"
import "./app.scss"
import Logout from "@/widgets/Logout/Logout"

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
            <body className="dark">
                <ReduxProvider>
                    <Logout/>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}
