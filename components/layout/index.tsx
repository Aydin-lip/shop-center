import Head from "next/head"

// Components
import Footer from "../footer";
import Navbar from "../navbar";
import { useAppContext } from "@/context/state";
import { useRouter } from "next/router";

interface IProps {
  title: string,
  children: JSX.Element | JSX.Element[]
  privet?: boolean
}

const Layout = ({ title, children, privet }: IProps) => {
  const { info, loading } = useAppContext()
  const router = useRouter()

  if (privet && !loading) {
    if (info._id == '0') router.replace('/')
    if (info._id == '1') router.replace('/register/sign-in')
  }

  return info._id <= '1' && privet && !loading ?
    <></> : (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <title>{`${title} - Shop Center`}</title>
        </Head>
        <div className="bg-container overflow-hidden">
          <Navbar />
          <main className="m-auto">{children}</main>
          <Footer />
        </div>
      </>
    )
}

export default Layout