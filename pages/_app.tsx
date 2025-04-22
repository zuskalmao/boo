import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GhostYield ($BOO) - Mysterious Yield Farming on Solana</title>
        <meta name="description" content="Farm yields from the beyond with GhostYield ($BOO). Nobody knows where the yield comes from - that's the mystery!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
