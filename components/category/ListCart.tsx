import { useState } from 'react';
// Mui
import { Heading6 } from '@/mui/customize';
import { ButtonGroup, Button, MenuItem, Select, SelectChangeEvent, Pagination, Tabs, Tab } from '@mui/material';
// Components
import Card from "@/components/card";
// Models
import IProducts from '@/models/products';

// List filter for tab
const listFilter = ['All', 'T-shirt', 'Dress', 'Top', 'Skirt', 'Hoodie'];
// Style tab and setting
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ListCart = ({ products }: { products: IProducts[] }) => {
  // States
  const [filterProducts, setFilterProducts] = useState<IProducts[]>(products)
  const [groupProducts, setGroupProducts] = useState<IProducts[]>(products)
  const [category, setCategory] = useState<number>(0);
  const [group, setGroup] = useState<string>('Trending');
  const [desc, setDesc] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1);

  // Function change paggination count page
  const changePagination = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

  // Change product category for show in filter
  const changeProducts = (id: number, p: IProducts[]) => {
    setCategory(id) 
    if (listFilter[id]) {
      if (listFilter[id] === 'All') {
        setFilterProducts(p)
        return
      }
      let filter = p.filter(product => product.style?.includes(listFilter[id]))
      setFilterProducts(filter)
    }
  }

  // Change sort style by trending|onsale|popular
  const changeGroup = (event: SelectChangeEvent) => {
    let value = event.target.value as string
    setGroup(value)
    let productFilter = products

    switch (value) {
      case 'OnSale':
        productFilter = products.filter(product => product.onSale > 1)
        break
      case 'Popular':
        productFilter = products.filter(product => product.star > 3)
        break

      default:
        break;
    }
    setGroupProducts(productFilter)
    changeProducts(0, productFilter)
  };

  return (
    <div className='w-full md:w-[73%]'>
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <div className="w-full flex flex-row items-center justify-start">
          <Heading6 className='them-category-list-title ml-2'>Category:</Heading6>
          <Tabs
            className='bg-container border-[#C3C3CE]'
            value={category}
            onChange={e => {
              const target = e.target as HTMLElement
              let id = listFilter.map(l => l.toLocaleLowerCase()).indexOf(target.innerText.toLocaleLowerCase())
              changeProducts(id, groupProducts)
            }}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            indicatorColor="primary"
            textColor="inherit"
          >
            {listFilter.map((item, idx) => <Tab className="text-light-200 them-category-tab font-bold font-poppins capitalize text-lg" key={idx} label={item} {...a11yProps(idx++)} />)}
          </Tabs>
          {/* <ul className="list-none flex flex-row items-center justify-start">
            {listFilter.map((item, idx) =>
              <li
                className={`cursor-pointer px-3 hover:bg-[#fcfcfc] rounded-md`}
                onClick={() => changeProducts(idx, groupProducts)}
                key={item}
              >
                <SubTitle2
                  style={category === idx ? { borderBottom: "2px solid #dd0426" } : { marginBottom: '2px' }}
                >{item}</SubTitle2>
              </li>
            )}
          </ul> */}
        </div>
        <ButtonGroup className='shadow-none ml-auto' variant="contained">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            className={desc ? 'border-[#dd0426] hover:border-[#dd0426]' : ''}
            onClick={() => {
              setFilterProducts(filterProducts.map((n, idx) => (
                filterProducts[filterProducts.length - idx - 1]
              )))
              setDesc(!desc)
            }}
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill={desc ? '#dd0426' : '#7F7F7F'} />
              <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill={desc ? '#dd0426' : '#7F7F7F'} />
              <path d="M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z" fill={desc ? '#dd0426' : '#7F7F7F'} />
            </svg>
          </Button>
          <Select
            value={group}
            onChange={changeGroup}
            variant="outlined"
            color="secondary"
            size="small"
            className='them-category-list'
            sx={{ width: '135px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <MenuItem value='Trending' className=''>Trending</MenuItem>
            <MenuItem value='OnSale'>On Sale</MenuItem>
            <MenuItem value='Popular'>Popular</MenuItem>
          </Select>
        </ButtonGroup>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        {filterProducts?.filter((product, idx) => idx + 1 > (page * 9) - 9 && idx + 1 <= page * 9)?.map(product =>
          <Card data={{ ...product, showOnSale: true }} key={product._id} />
        )}
      </div>
      <Pagination
        className="mt-11 flex justify-center"
        count={Math.ceil(filterProducts?.length / 9)}
        color="primary"
        size="large"
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={changePagination}
      />
    </div>
  )
}

export default ListCart