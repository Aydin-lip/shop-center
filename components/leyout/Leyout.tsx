import Head from "next/head"

// Components
import Footer from "../footer/Footer";
import Navbar from "../navbar";

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
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Leyout