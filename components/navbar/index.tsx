import { useEffect, useState } from "react";
import Link from "next/link";
// Mui
import { Container, Fab, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styled from "@emotion/styled";
// Components
import Logo from "../logo/shopCenter";
import SearchNav from "./search";
import Profile from "./profile";
import Items from "./items";
import AppButton from "./appButton";


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  left: 0,
  right: 0,
  bottom: 30,
  margin: '0 auto',
});

const Navbar = () => {
  // States
  const [scroll, setScroll] = useState<boolean>(false)
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [animation, setAnimation] = useState<boolean>(false)
  // Function open navbar in mobile responsive
  const openNavHandler = () => {
    setOpenNav(true)
    setTimeout(() => {
      setAnimation(true)
    }, 100);
  }
  // Function close navbar in mobile responsive
  const closeNavHandler = () => {
    setAnimation(false)
    setTimeout(() => {
      setOpenNav(false)
    }, 700);
  }

  useEffect(() => {
    // For change height navbar scroll time
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset >= 20),
      );
    }
  }, []);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-10 h-[150px] hidden md:block">
        <nav className={`bg-container delay-100 ${scroll ? 'shadow-lg' : ''}`}>
          <Container maxWidth="xl" className="pt-4 px-8">
            <div className="flex justify-between">
              <Link href='/' className="no-underline">
                <span className="lg:hidden">
                  <Logo title={false} />
                </span>
                <span className="hidden lg:inline-block">
                  <Logo />
                </span>
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
      <div className="sticky top-0 left-0 right-0 z-10 md:hidden">
        <nav className={`bg-container delay-100 py-3 ${scroll ? 'shadow-lg' : ''}`}>
          <div className="flex items-center">
            <div
              className="w-16 h-9 bg-red-dark-100 rounded-lg ml-[-1.5rem] cursor-pointer relative"
              style={{ boxShadow: '3px 3px 11px #dd0426bf' }}
              onClick={openNavHandler}
            >
              <span className="block w-3 h-[2px] bg-container absolute top-[13px] right-5 rounded-2xl"></span>
              <span className="block w-3 h-[2px] bg-container absolute bottom-[13px] right-[13px] rounded-2xl"></span>
            </div>
            <div className="w-full flex justify-center">
              <Link href='/' className="no-underline">
                <Logo />
              </Link>
            </div>
            {openNav &&
              <div>
                <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000061] transition-all duration-1000 ${animation ? 'opacity-100' : 'opacity-0'}`} onClick={closeNavHandler}>
                  <StyledFab className="bg-dark-50" onClick={closeNavHandler}>
                    <AddIcon style={{ transform: 'rotate(45deg)' }} />
                  </StyledFab>
                </div>
                <div className={`fixed bg-[#f23b57] rounded-full transition-all duration-500 ${animation ? 'top-[-72rem] left-[-50rem] w-[100rem] h-[100rem]' : 'top-4 left-2 w-8 h-8'}`}></div>
                <div className={`fixed bg-red-dark-100 rounded-full transition-all duration-700 ${animation ? 'top-[-72rem] left-[-46rem] w-[85rem] h-[100rem]' : 'top-4 left-2 w-8 h-8'}`}>

                  <div className="fixed top-0 left-0 p-4 flex flex-col gap-4 max-w-lg w-full">
                    <div className={`mr-8 transition-all duration-1000 ${animation ? 'mt-0' : 'mt-[-11rem]'}`}>
                      <SearchNav />
                    </div>
                    <div className="flex justify-between max-[425px]:flex-col max-[425px]:gap-8 max-[315px]:gap-4 max-[425px]:mr-8">
                      <div
                        className={`flex transition-all duration-1000 ${animation ? 'ml-0' : 'ml-[-15rem]'}`}
                        onClick={() => setOpenNav(false)}
                      >
                        <Items />
                      </div>
                      <div
                        className={`flex flex-col gap-4 h-24 mr-8 min-[500px]:mr-12 max-[425px]:w-[14.8rem] transition-all duration-1000 ${animation ? 'mt-0' : 'ml-[-20rem] min-[425px]-mt-[-11rem]'}`}
                        onClick={() => setOpenNav(false)}
                      >
                        <Profile />
                        <AppButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;