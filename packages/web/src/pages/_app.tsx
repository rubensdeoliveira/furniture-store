import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React from 'react'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Loja de Móveis</title>
        <meta
          name="description"
          content="Compre seus móveis e receba na sua casa."
        ></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
