import Header from "@/components/home/header";
import Layout from "@/components/layout";
import { Heading4 } from "@/mui/customize";

export default function Home() {
  return (
    <Layout title='Home'>
      <>
        <Header />
        <Heading4 className="min-h-screen">test</Heading4>
      </>
    </Layout>
  )
}
