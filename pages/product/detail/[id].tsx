import { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Skeleton } from '@mui/material';

// Components
import Layout from "@/components/layout";
import Product from '@/components/detail/Product';
import Details from '@/components/detail/details';
import Review from '@/components/detail/tabs/review';
import Description from '@/components/detail/tabs/description';
import TrendingProducts from '@/components/home/trending';
import { getAllProduct } from '@/services/http.service';
import IProducts from '@/models/products';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps } from 'next';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const listTabs = [{ id: 1, title: 'Description' }, { id: 2, title: 'Review' }, { id: 3, title: 'Related Product' }]

const Detail = ({ products, productID }: { products: IProducts[], productID: IProducts }) => {
  const [productState, setProductState] = useState<IProducts>(productID)
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  const router = useRouter()
  let loading = router.isFallback

  if (productID._id !== productState._id) {
    setProductState(productID)
  }

  return (
    <Layout title='Detail'>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className='flex flex-row items-stretch justify-between mt-16 w-full'>
          {loading ? (
            <>
              <div className='relative w-2/3 flex justify-center'>
                <Skeleton variant='text' width={600} height={600} className='absolute top-[-8rem]' />
              </div>
              <div className=''>
                <Skeleton variant='text' width={500} height={50} />
                <Skeleton variant='text' width={150} height={20} />
                <Skeleton variant='text' width={120} height={40} />
                <Skeleton variant='text' width={600} height={100} />
                <Skeleton variant='text' width={500} height={100} className='m-auto' />
                <Skeleton variant='text' width={250} height={30} />
                <Skeleton variant='text' width={140} height={25} />
              </div>
            </>
          ) : (
            <>
              <Product data={productState} />
              <Details data={productState} />
            </>
          )}
        </div>
        <Box className="bg-[#ffffff] w-full mt-20" >
          <AppBar
            position="static"
            sx={{ '& .css-1nlllfd-MuiTabs-indicator': { height: 3 } }}
            className="text-[#424242] shadow-none bg-transparent border-0 border-b-[#C3C3CE] border-b border-solid"
          >
            <Tabs
              className='bg-[#ffffff] border-[#C3C3CE]'
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              aria-label="full width tabs example"
            >
              {listTabs.map(item => <Tab className="text-light-200 font-bold font-poppins capitalize text-lg" key={item.id} label={item.title} {...a11yProps(item.id)} />)}
            </Tabs>
          </AppBar>
          {value === 0 ? (
            loading ? (
              <div className='mt-4 mb-20'>
                <Skeleton variant='text' height={50} className='w-full' />
                <Skeleton variant='text' height={50} className='w-1/2' />
              </div>
            ) : (
              <Description data={productState.description} />
            )
          ) : value === 1 ?
            loading ? (
              <div className='mb-20 mt-6 ml-4'>
                <Skeleton variant='text' width={300} height={60} className='mb-6' />
                <div className="flex gap-2 items-center mb-2">
                  <Skeleton variant='circular' width={50} height={50} />
                  <Skeleton variant='text' width={200} height={30} />
                </div>
                <Skeleton variant='text' width={700} height={40} />
                <Skeleton variant='text' width={500} height={40} />
              </div>
            ) : (
              <Review data={productState.comments} />
            )
            : <TrendingProducts from="detail" products={products} />}
        </Box>
      </div>
    </Layout >
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  let products: IProducts[] = []
  let id = context.params?.id
  try {
    let productRes = await getAllProduct()
    products = productRes.data.products
  } catch (err) { }

  let productID = products.filter(p => p._id === id)[0]

  if (!productID) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      products,
      productID
    }
  }
}

export const getStaticPaths = async () => {
  let products: IProducts[] = []
  try {
    let productRes = await getAllProduct()
    products = productRes.data.products
  } catch (err) { }

  let paths = products.map(p => ({ params: { id: p._id } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default Detail