import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/scss/global.scss'
import '@/scss/reset.scss'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import Header from '@/components/Header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'GitHub 사용자 검색',
  description: 'GitHub 사용자를 검색할 수 있는 서비스입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryProvider>
          <div className="layout">
            <Header />
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
