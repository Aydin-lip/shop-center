import Favorites from "@/components/dashboard/favorites";
import Logout from "@/components/dashboard/logout";
import Menu from "@/components/dashboard/menu";
import Messages from "@/components/dashboard/messages";
import Orders from "@/components/dashboard/orders";
import Profile from "@/components/dashboard/profile";
import Layout from "@/components/layout";
import { useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState<string>('Profile')
  const [logout, setLogout] = useState<boolean>(false)

  return (
    <>
      <Layout title="Dashboard">
        <div className="container m-auto flex mb-56 h-[600px] mt-20">
          <Menu item={item} setItem={setItem} setLogout={setLogout} />
          {item === "Profile" && <Profile />}
          {item === "Orders" && <Orders />}
          {item === "Favorites" && <Favorites />}
          {item === "Messages" && <Messages />}
          <Logout logout={logout} setLogout={setLogout} />
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;