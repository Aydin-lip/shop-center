import Filters from "@/components/category/Filters";
import ListCart from "@/components/category/ListCart";
import Layout from "@/components/layout";

const index = () => {
  return (
    <Layout title='Category'>
      <div className='flex flex-row items-start justify-between my-12'>
        <Filters />
        <ListCart />
      </div>
    </Layout >
  )
}

export default index