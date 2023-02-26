import Header from "@/components/home/header";
import NewCollection from "@/components/home/new";
import OnSaleProducts from "@/components/home/onSale";
import TrendingProducts from "@/components/home/trending";
import Layout from "@/components/layout";
import { Heading4 } from "@/mui/customize";

export default function Home() {
  return (
    <Layout title='Home'>
      <Header />
      <TrendingProducts />
      <NewCollection />
      <OnSaleProducts />
      <Heading4 className="min-h-screen">test</Heading4>
    </Layout>
  )
}
