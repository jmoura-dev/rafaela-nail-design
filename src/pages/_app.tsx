import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ScreenSizeProvider } from '@/contexts/screenSizeContext'
import { globalStyles } from '@/styles/globals'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ScreenSizeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ScreenSizeProvider>
    </Container>
  )
}
