import Filters from "@/components/category/filters";
import ListCart from "@/components/category/listCart";
import Layout from "@/components/layout";

const index = () => {
  return (
    <Layout title='Category'>
      <div className='container mx-auto flex flex-row items-start justify-between my-12'>
        <Filters />
        <ListCart />
      </div>
    </Layout >
  )
}

export default index