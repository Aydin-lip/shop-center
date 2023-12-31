// Components
import Card from "../card";
// Mui
import { BasicButton } from "@/mui/customize";
// Models
import IProducts from "@/models/products";
// Context
import { useAppContext } from "@/context/state";
// Api for send data 
import { cartAddBag, editFavorites } from "@/services/http.service";


const Favorites = ({ products }: { products: IProducts[] }) => {
  let { info, setInfo } = useAppContext()
  let favorites = products?.filter(p => info.favorites.includes(p._id)) // Filter favorites product from all product

  return (
    <>
      <div className="w-full h-full md:pl-10 overflow-y-auto">
        <div className="flex flex-wrap justify-center">
          {favorites?.map(p =>
            <div className="" key={p._id}>
              <Card data={{ ...p, showOnSale: true }} />
              <div className="flex justify-between p-3">
                <BasicButton
                  size="small"
                  color="error"
                  variant="contained"
                  className="bg-red-dark-100"
                  onClick={() => {
                    let newBag = {
                      product_id: p._id,
                      count: [{
                        color: p.color[0],
                        size: p.size[0]
                      }]
                    }
                    cartAddBag(newBag) // Add product to bag and delete from favorites
                      .then(res => {
                        editFavorites({ product_id: p._id })
                        let filterFavorites = info.favorites.filter(f => f !== p._id)
                        let allBag = [
                          ...info.cart.bag,
                          {
                            id: info.cart.bag[info.cart.bag.length - 1] ? info.cart.bag[info.cart.bag.length - 1].id + 1 : 1,
                            ...newBag
                          }
                        ]
                        setInfo({ ...info, favorites: filterFavorites, cart: { ...info.cart, bag: allBag } })
                      })
                  }}
                  startIcon={
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.69 17.75H8.04C7.05 17.75 6.1 17.33 5.43 16.6C5.09767 16.2381 4.84355 15.8115 4.68353 15.347C4.52351 14.8824 4.46104 14.3898 4.5 13.9L5.33 3.94C5.36 3.63 5.25 3.33 5.04 3.1C4.83 2.87 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24C4.97 1.25 5.66 1.56 6.15 2.09C6.42 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.46 16.24 8.04 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82C21.3137 6.53647 21.2779 6.25111 21.1848 5.98225C21.0917 5.71339 20.9434 5.46698 20.7494 5.25885C20.5554 5.05073 20.32 4.88548 20.0583 4.77374C19.7966 4.66199 19.5145 4.60622 19.23 4.61H6.78V4.62ZM16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25ZM8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="white" />
                      <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="white" />
                    </svg>
                  }>
                  Add To Cart
                </BasicButton>
                <BasicButton
                  size="small"
                  color="secondary"
                  variant="text"
                  onClick={() => {
                    let filterFavorites = info.favorites.filter(f => f !== p._id)
                    editFavorites({ product_id: p._id })
                      .then(res => {
                        setInfo({ ...info, favorites: filterFavorites })
                      })
                  }}
                  startIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9997 6.73001C20.9797 6.73001 20.9497 6.73001 20.9197 6.73001C15.6297 6.20001 10.3497 6.00001 5.11967 6.53001L3.07967 6.73001C2.65967 6.77001 2.28967 6.47001 2.24967 6.05001C2.20967 5.63001 2.50967 5.27001 2.91967 5.23001L4.95967 5.03001C10.2797 4.49001 15.6697 4.70001 21.0697 5.23001C21.4797 5.27001 21.7797 5.64001 21.7397 6.05001C21.7097 6.44001 21.3797 6.73001 20.9997 6.73001Z" fill="#7F7F7F" />
                      <path d="M8.49977 5.72C8.45977 5.72 8.41977 5.72 8.36977 5.71C7.96977 5.64 7.68977 5.25 7.75977 4.85L7.97977 3.54C8.13977 2.58 8.35977 1.25 10.6898 1.25H13.3098C15.6498 1.25 15.8698 2.63 16.0198 3.55L16.2398 4.85C16.3098 5.26 16.0298 5.65 15.6298 5.71C15.2198 5.78 14.8298 5.5 14.7698 5.1L14.5498 3.8C14.4098 2.93 14.3798 2.76 13.3198 2.76H10.6998C9.63977 2.76 9.61977 2.9 9.46977 3.79L9.23977 5.09C9.17977 5.46 8.85977 5.72 8.49977 5.72Z" fill="#7F7F7F" />
                      <path d="M15.2104 22.75H8.79039C5.30039 22.75 5.16039 20.82 5.05039 19.26L4.40039 9.19001C4.37039 8.78001 4.69039 8.42001 5.10039 8.39001C5.52039 8.37001 5.87039 8.68001 5.90039 9.09001L6.55039 19.16C6.66039 20.68 6.70039 21.25 8.79039 21.25H15.2104C17.3104 21.25 17.3504 20.68 17.4504 19.16L18.1004 9.09001C18.1304 8.68001 18.4904 8.37001 18.9004 8.39001C19.3104 8.42001 19.6304 8.77001 19.6004 9.19001L18.9504 19.26C18.8404 20.82 18.7004 22.75 15.2104 22.75Z" fill="#7F7F7F" />
                      <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#7F7F7F" />
                      <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#7F7F7F" />
                    </svg>
                  }>
                  delete
                </BasicButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Favorites;