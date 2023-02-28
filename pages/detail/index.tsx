import React from 'react'
import Layout from "@/components/layout";
import Product from '@/components/detail/Product';

const index = () => {
  return (
    <Layout title='Detail'>
      <div className="container mx-auto">
        <Product />
      </div>
    </Layout>
  )
}

export default index