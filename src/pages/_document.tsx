import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" className="h-full">
        <Head></Head>
        <body className="h-full min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
