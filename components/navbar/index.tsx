import { Container, Tooltip } from "@mui/material";
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
      <div className="sticky top-0 left-0 right-0 z-10 h-[150px]">
        <nav className={`bg-container delay-100 ${scroll ? 'shadow-lg' : ''}`}>
          <Container maxWidth="xl" className="pt-4 px-8">
            <div className="flex justify-between">
              <Link href='/' className="no-underline">
                <Logo />
              </Link>
              <SearchNav />
              <Profile />
            </div>
            <div className="flex justify-between">
              <div className={`px-2 transition-all ${scroll ? 'pt-2 pb-2' : 'pb-4 pt-8'}`}>
                <Items />
              </div>
              <div className="flex items-center">
                <Tooltip title="Coming Soon..">
                  <div>
                    <AppButton />
                  </div>
                </Tooltip>
              </div>
            </div>
          </Container>
        </nav>
      </div>
    </>
  )
}

export default Navbar;