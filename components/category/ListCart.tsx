import { useState } from 'react';
import { Heading6, SubTitle2 } from '@/mui/customize';
import { ButtonGroup, Button, MenuItem, Select, SelectChangeEvent, Pagination } from '@mui/material';
import Card from "@/components/card";
import IProducts from '@/models/products';

const ListCart = ({ products }: { products: IProducts[] }) => {
  const listFilter = ['All', 'T-shirt', 'Dress', 'Top', 'Skirt', 'Hoodie'];

  const [filterProducts, setFilterProducts] = useState<IProducts[]>(products)
  const [groupProducts, setGroupProducts] = useState<IProducts[]>(products)
  const [category, setCategory] = useState<number>(0);
  const [group, setGroup] = useState<string>('Trending');
  const [desc, setDesc] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1);

  const changePagination = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

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
    <div className='w-[73%]'>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <Heading6>Category:</Heading6>
          <ul className="list-none flex flex-row items-center justify-start">
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
          </ul>
        </div>
        <ButtonGroup className='shadow-none' variant="contained">
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
            sx={{ width: '135px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <MenuItem value='Trending'>Trending</MenuItem>
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