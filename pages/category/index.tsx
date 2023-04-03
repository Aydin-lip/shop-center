import Filters from "@/components/category/Filters";
import ListCart from "@/components/category/ListCart";
import Layout from "@/components/layout";
import IProducts from "@/models/products";
import { getAllProduct } from "@/services/http.service";

const index = ({products}: {products: IProducts[]}) => {
  return (
    <Layout title='Category'>
      <div className='container mx-auto flex flex-row items-start justify-between my-12'>
        <Filters />
        <ListCart products={products} />
      </div>
    </Layout >
  )
}

export const getStaticProps = async () => {
  let products = []
  try {
    let productRes = await getAllProduct()
    products = productRes.data.products
  } catch (err) { }
  return {
    props: {
      products
    }
  }
}

export default index