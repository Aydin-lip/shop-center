import Head from "next/head"

// Components
import Footer from "./Footer";

interface PropsLeyout {
  title: string,
  children: JSX.Element
}

const Leyout = ({ title, children }: PropsLeyout) => {
  return (
    <>
      <Head>
        <title>{`${title} - Shop-Center`}</title>
      </Head>
      <div>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Leyout