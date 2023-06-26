import Header from "@/components/home/header";
import NewCollection from "@/components/home/collection";
import OnSaleProducts from "@/components/home/onSale";
import PopularProducts from "@/components/home/popular";
import TrendingProducts from "@/components/home/trending";
import Layout from "@/components/layout";
import ICollection from "@/models/collection";
import IProducts from "@/models/products";
import { useRouter } from "next/router";
import getAllCollection from "@/db/collectionV2";
import getAllProducts from "@/db/productsV2";

const Home = ({ collections, products }: { collections: ICollection[], products: IProducts[] }) => {
  const router = useRouter()
  if (router.asPath) {
    const path = router.asPath.split('#')[1]
    switch (path) {
      case 'Women':
      case 'Men':
      case 'Kids':
        window.scrollTo(0, 670)
        break
      case 'OnSale':
        window.scrollTo(0, 2156)
        break
      case 'Collection':
        window.scrollTo(0, 1157)
        break
      default:
        break;
    }
  }

  return (
    <Layout title='Home'>
      <Header />
      <TrendingProducts from="home" products={products} />
      <NewCollection collections={collections} />
      <OnSaleProducts products={products} />
      <PopularProducts products={products} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  let collections = await getAllCollection()
  let products = await getAllProducts()

  return {
    props: {
      collections,
      products
    }
  }
}

export default Home