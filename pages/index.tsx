import Header from "@/components/home/header";
import NewCollection from "@/components/home/new";
import OnSaleProducts from "@/components/home/onSale";
import PopularProducts from "@/components/home/popular";
import TrendingProducts from "@/components/home/trending";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout title='Home'>
      <Header />
      <TrendingProducts from="home" />
      <NewCollection />
      <OnSaleProducts />
      <PopularProducts />
      {/* <Heading4 className="min-h-screen">test</Heading4> */}
    </Layout>
  )
}
