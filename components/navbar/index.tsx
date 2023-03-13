import { Container } from "@mui/material";
import Logo from "../logo/shopCenter";
import SearchNav from "./search";
import Profile from "./profile";
import Items from "./items";
import AppButton from "./appButton";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset >= 20),
      );
    }
  }, []);

  return (
    <>
      <nav className={`z-10 bg-container sticky top-0 left-0 right-0 delay-100 ${scroll ? 'shadow-lg' : ''}`}>
        <Container maxWidth="xl" className="pt-4 px-8">
          <div className="flex justify-between">
            <Link href='/' className="no-underline">
              <Logo />
            </Link>
            <SearchNav />
            <Profile />
          </div>
          <div className="flex justify-between">
            <div className={`px-2 pb-4 transition-all pt-8`}>
              <Items />
            </div>
            <div className="flex items-center">
              <AppButton />
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar;