import Head from "next/head"

// Components
import Footer from "../footer";
import Navbar from "../navbar";
import { useAppContext } from "@/context/state";
import { useRouter } from "next/router";
import { StyledEngineProvider } from "@mui/material";

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
      <StyledEngineProvider injectFirst>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <title>{`${title} - Shop Center`}</title>
        </Head>
        <div className="bg-container">
          <Navbar />
          <main className="m-auto overflow-hidden">{children}</main>
          <Footer />
        </div>
        </StyledEngineProvider>
    )
}

export default Layout