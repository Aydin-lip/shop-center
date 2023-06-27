import { useState } from "react";
// Componnets
import Favorites from "@/components/dashboard/favorites";
import Logout from "@/components/dashboard/logout";
import Menu from "@/components/dashboard/menu";
import Messages from "@/components/dashboard/messages";
import Orders from "@/components/dashboard/orders";
import Profile from "@/components/dashboard/profile";
import Layout from "@/components/layout";
// Models
import IProducts from "@/models/products";
// Get information directly from the original source
import getAllProducts from "@/db/productsV2";

const Dashboard = ({products}: {products: IProducts[]}) => {
  // States
  const [item, setItem] = useState<string>('Profile')
  const [logout, setLogout] = useState<boolean>(false)

  return (
    <>
      <Layout title="Dashboard" privet={true}>
        <div className="container m-auto flex mb-56 md:h-[600px] mt-12 md:mt-20">
          <Menu item={item} setItem={setItem} setLogout={setLogout} />
          {item === "Profile" && <Profile />}
          {item === "Orders" && <Orders />}
          {item === "Favorites" && <Favorites products={products} />}
          {item === "Messages" && <Messages />}
          <Logout logout={logout} setLogout={setLogout} />
        </div>
      </Layout>
    </>
  )
}

// Next data fetching SSG
export const getStaticProps = async () => {
  let products = await getAllProducts()

  return{
    props: {
      products
    }
  }
}

export default Dashboard;