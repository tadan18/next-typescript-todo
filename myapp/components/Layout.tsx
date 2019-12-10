import React from "react"
import Head from "next/head"

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = "This is default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="back-ground-color">
      {children}
    </div>
    <footer>
      <hr />
      <span>Todo Footer</span>
    </footer>
    <style jsx>{`
      div {
        background: #FFDBC9
      }
    `}</style>
  </div>
)

export default Layout