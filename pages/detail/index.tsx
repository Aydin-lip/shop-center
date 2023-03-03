import { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

// Components
import Layout from "@/components/layout";
import Product from '@/components/detail/Product';
import Details from '@/components/detail/Details';
import Review from '@/components/detail/tabs/review';
import Description from '@/components/detail/tabs/description';
import TrendingProducts from '@/components/home/trending';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const listTabs = [{ id: 1, title: 'Description' }, { id: 2, title: 'Review' }, { id: 3, title: 'Related Product' }]

const index = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Layout title='Detail'>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className='flex flex-row items-stretch justify-between mt-16'>
          <Product />
          <Details />
        </div>
        <Box className="bg-[#ffffff] w-full mt-20" >
          <AppBar
            position="static"
            sx={{ '& .css-1nlllfd-MuiTabs-indicator': { height: 3 } }}
            className="color-[#424242] shadow-none bg-transparent border-0 border-b-[#C3C3CE] border-b border-solid"
          >
            <Tabs
              className='bg-[#ffffff] border-[#C3C3CE]'
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              aria-label="full width tabs example"
            >
              {listTabs.map(item => <Tab className="text-[#424242] font-bold text-2xl font-poppins capitalize" key={item.id} label={item.title} {...a11yProps(item.id)} />)}
            </Tabs>
          </AppBar>
          {value === 0 ? <Description /> : value === 1 ? <Review /> : <TrendingProducts from="detail" />}
        </Box>
      </div>
    </Layout >
  )
}

export default index