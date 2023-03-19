import Head from "next/head"

// Components
import Footer from "../footer";
import Navbar from "../navbar";
import { useAppContext } from "@/context/state";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface IProps {
  title: string,
  children: JSX.Element | JSX.Element[]
  privet?: boolean
}

const Layout = ({ title, children, privet }: IProps) => {
  const { info } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (info._id == '0' && privet) {
      router.replace('/register/sign-in')
    }
  }, [])

  return info._id == '0' && privet ?
    <></> : (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <title>{`${title} - Shop Center`}</title>
        </Head>
        <div className="bg-container">
          <Navbar />
          <main className="m-auto">{children}</main>
          <Footer />
        </div>
      </>
    )
}

export default Layout