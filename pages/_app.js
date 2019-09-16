import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'

import { getStore } from '../store'

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    static async getInitialProps(appContext) {
        console.log('App getInitialProps')
        console.log(getStore())
      // calls page's `getInitialProps` and fills `appProps.pageProps`
      const appProps = await App.getInitialProps(appContext);

      appProps.__store = getStore()

      return { ...appProps }
    }

    render() {
        const { Component, pageProps, __store } = this.props

        const isServer = typeof window !== 'object'
    //    console.log(`inside _app on ${isServer.toString()}`)

        return <Provider store={__store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <Component {...pageProps} />
            {/* </PersistGate> */}
        </Provider>
    }
}

export default MyApp