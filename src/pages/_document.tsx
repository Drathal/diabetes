import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" className="h-full w-100">
        <Head></Head>
        <body className="h-full w-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
