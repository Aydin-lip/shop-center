import { useState } from 'react';
import { Heading6, SubTitle2 } from '@/mui/customize';
import { ButtonGroup, Button, MenuItem, Select, SelectChangeEvent, Pagination } from '@mui/material';
import Card from "@/components/card";
import Products from "@/data/products";

interface IProduct {
  id: number
  name: string
  img: string
  price: number
  onSale?: number
  showOnSale?: boolean
  category: string
  star: number
}

const listFilter = ['T-shirt', 'Dress', 'Top', 'Skirt', 'Hoodie'];

const ListCart = () => {

  const [age, setAge] = useState('Popular');
  const [page, setPage] = useState(1);
  // const [products, setProducts] = useState<IProduct[]>(Products())
  const [products, setProducts] = useState<IProduct[]>(Products())
  const allProduct = Products()


  const handleChange = (event: SelectChangeEvent) => setAge(event.target.value as string);
  const changePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    // setProducts(Products().splice((page * 9) - 9, page * 9))
    setPage(value);
    // let filterProduct = allProduct.splice((page * 9) - 9, page * 9)
    // let filterProduct = allProduct.filter
    // setProducts(filterProduct)
  };

  return (
    <div className='w-[73%]'>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <Heading6>Category:</Heading6>
          <ul className="list-none flex flex-row items-center justify-start">
            {listFilter.map((item, idx) =>
              <li
                className={`relative transition-all duration-500 ${idx !== 0 && 'ml-6'}`}
                key={item}
              >
                <SubTitle2
                  className="after:w-0 after:h-0 hover:after:content-[''] hover:after:w-full hover:after:h-0.5 
                  hover:after:bg-red-light-800 hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] 
                  transition duration-300 ease-in-out delay-150 cursor-pointer"
                >{item}</SubTitle2>
              </li>
            )}
          </ul>
        </div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#7F7F7F" />
              <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#7F7F7F" />
              <path d="M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z" fill="#7F7F7F" />
            </svg>
          </Button>
          <Select
            value={age}
            onChange={handleChange}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ width: '135px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <MenuItem value='Popular'>Popular</MenuItem>
            <MenuItem value='Popular2'>Popular2</MenuItem>
            <MenuItem value='Popular3'>Popular3</MenuItem>
          </Select>
        </ButtonGroup>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        {products.filter((product, idx) => idx > (page * 9) - 9 && idx <= page * 9).map(product =>
          <Card data={{ ...product, showOnSale: true }} key={product.id} />
        )}
      </div>
      <Pagination
        className="mt-11 flex justify-center"
        count={Math.ceil(Products().length / 9)}
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

// export function getStaticProps() {
//   const res = Product
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }

export default ListCart