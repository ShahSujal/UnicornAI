import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/provider/them-provider'

import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Unicorn Ai',
  description: 'Unicorn Ai is a platform...',
  icons: {
    icon: "/favicon.ico",
  },
}
const paps = localFont({
  src: [
    {
      path: "../../public/fonts/papsmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/papslight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/papsbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-paps",
});
const fragment = localFont({
  src: [
    {
      path: "../../public/fonts/fragmentmedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/fragmentlight.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/fragmentbold.otf",
      weight: "700",
    },
  ],
  variable: "--font-fragment",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${paps.variable} ${fragment.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}