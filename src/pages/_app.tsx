import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>CodeArena</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.png" />
        <meta name='description' content='Web Application that contains DSA problems and a code editor ' />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
