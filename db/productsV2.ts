import IProducts from "@/models/products"
import CollectionDB from "./mongoDB"

let getAllProducts = async () => {
  let product = await CollectionDB("products")
  let products = await product.find({}).toArray()
  let fixProducts: IProducts[] = []
  products.forEach(c => {
    fixProducts.push({ ...c, _id: c._id.toHexString() } as IProducts)
  })
  return fixProducts
}

export default getAllProducts