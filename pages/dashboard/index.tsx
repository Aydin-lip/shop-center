import Menu from "@/components/dashboard/menu";
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
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;