import Navbar from "../navbar"

interface IProps {
  children: JSX.Element
}
const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default Layout