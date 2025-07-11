import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'
import {SessionProvider} from 'next-auth/react'
import {Toaster} from 'sonner'

import {auth} from '@/auth'
import ThemeProvider from '@/context/Theme'

const inter = localFont({
  src: './fonts/InterVF.woff2',
  variable: '--font-inter',
  weight: '100 200 300 400 500 600 700 800 900',
})

const spaceGrotesk = localFont({
  src: './fonts/SpaceGroteskVF.woff2',
  variable: '--font-space-grotesk',
  weight: '300 400 500 600 700',
})

export const metadata: Metadata = {
  title: 'DevFlowAI',
  description:
    'DevFlowAI is a platform for developers to collaborate and share knowledge, resources, and best practices. It is a community-driven platform that aims to empower developers to learn, grow, and thrive. AI Mode helps users to learn, solve and grow faster.',
  icons: {
    icon: '/images/site-icon.svg',
  },
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await auth()

  return (
    <html lang='en' suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
          <ThemeProvider defaultTheme='system' enableSystem attribute={'class'}>
            {children}
            <Toaster
              theme='system'
              position='bottom-right'
              swipeDirections={['left', 'right']}
              closeButton={true}
              richColors
              duration={20000}
            />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout
