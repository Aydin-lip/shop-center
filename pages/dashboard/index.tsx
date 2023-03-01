import Favorites from "@/components/dashboard/favorites";
import Menu from "@/components/dashboard/menu";
import Orders from "@/components/dashboard/orders";
import Profile from "@/components/dashboard/profile";
import Layout from "@/components/layout";
import { useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState<string>('Profile')

  return (
    <>
      <Layout title="Dashboard">
        <div className="container m-auto flex mb-56 h-[600px]">
          <Menu item={item} setItem={setItem} />
          {item === "Profile" && <Profile />}
          {item === "Orders" && <Orders />}
          {item === "Favorites" && <Favorites />}
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;