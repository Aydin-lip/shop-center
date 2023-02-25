import Head from "next/head"

// Components
import Footer from "../footer/Footer";
import Navbar from "../navbar";

interface IProps {
  title: string,
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{`${title} - Shop-Center`}</title>
      </Head>
      <div>
        <Navbar />
        <main className="container m-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout