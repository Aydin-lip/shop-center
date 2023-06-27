import { useRouter } from "next/router";
// Componnets
import Header from "@/components/home/header";
import NewCollection from "@/components/home/collection";
import OnSaleProducts from "@/components/home/onSale";
import PopularProducts from "@/components/home/popular";
import TrendingProducts from "@/components/home/trending";
import Layout from "@/components/layout";
// Models
import ICollection from "@/models/collection";
import IProducts from "@/models/products";
// Get information directly from the original source
import getAllCollection from "@/db/collectionV2";
import getAllProducts from "@/db/productsV2";


const Home = ({ collections, products }: { collections: ICollection[], products: IProducts[] }) => {
  const router = useRouter()
  // It checks the path, if it is there, it goes to that scroll
  if (router.asPath) {
    const path = router.asPath.split('#')[1] // It separates the hashtag from the path

    switch (path) {
      case 'Women': // Trending Products
      case 'Men':
      case 'Kids':
        // Checks the screen size
        if (window.innerWidth >= 1024)
          window.scrollTo(0, 680)
        else if (window.innerWidth >= 640)
          window.scrollTo(0, 580)
        else
          window.scrollTo(0, 380)

        break
      case 'OnSale': // On Sale Products
        // Checks the screen size
        if (window.innerWidth >= 1280)
          window.scrollTo(0, 2156)
        else if (window.innerWidth >= 1024)
          window.scrollTo(0, 2400)
        else if (window.innerWidth >= 768)
          window.scrollTo(0, 2280)
        else if (window.innerWidth >= 640)
          window.scrollTo(0, 2600)
        else
          window.scrollTo(0, 2880)

        break
      case 'Collection': // New Collection
        // Checks the screen size
        if (window.innerWidth >= 1024)
          window.scrollTo(0, 1157)
        else if (window.innerWidth >= 768)
          window.scrollTo(0, 1070)
        else if (window.innerWidth >= 640)
          window.scrollTo(0, 1050)
        else
          window.scrollTo(0, 900)

        break
      default:
        break;
    }
  }
  // Connect page components
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
// Next data fetching SSG
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