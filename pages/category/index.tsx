import Filters from "@/components/category/Filters";
import ListCart from "@/components/category/ListCart";
import Layout from "@/components/layout";
import getAllProducts from "@/db/productsV2";
import IProducts from "@/models/products";

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

export const getStaticProps = async () => {
  let products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default index