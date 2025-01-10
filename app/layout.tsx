import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piotr Zajas Portfolio',
  description: 'Modern and Minimalist next js portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'font-gotham light h-full'}>{children}</body>
    </html>
  )
}
