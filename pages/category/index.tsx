// Componnets
import Filters from "@/components/category/Filters";
import ListCart from "@/components/category/ListCart";
import Layout from "@/components/layout";
// Models
import IProducts from "@/models/products";
// Get information directly from the original source
import getAllProducts from "@/db/productsV2";

const index = ({products}: {products: IProducts[]}) => {
  return (
    <Layout title='Category'>
      <div className='container mx-auto flex flex-col gap-4 md:flex-row items-start justify-between md:my-12'>
        <Filters />
        <ListCart products={products} />
      </div>
    </Layout >
  )
}

// Next data fetching SSG
export const getStaticProps = async () => {
  let products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default index