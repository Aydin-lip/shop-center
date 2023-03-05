import { BasicButton, SubTitle2 } from "@/mui/customize";
import { Button, ButtonGroup, Tooltip } from "@mui/material";
import Image from "next/image";
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { IBag, IProduct } from "@/models/cart";


const Size = (options: string[], size: number) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(size);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div ref={anchorRef}>
        <Button
          size="small"
          onClick={handleToggle}
          variant="text"
          className="bg-[#FFF5F1] text-light-300"
          endIcon={<ArrowDropDownIcon />}
        >
          {options[selectedIndex]}
        </Button>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className="flex p-0" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
const Color = (options: string[], color: number) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(color);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div ref={anchorRef}>
        <Button
          size="small"
          onClick={handleToggle}
          variant="text"
        >
          <div className='w-10 h-10 rounded-full' style={{ backgroundColor: `${options[selectedIndex]}` }}></div>
        </Button>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className="p-0 flex" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      className="p-1"
                    >
                      <div className='w-10 h-10 rounded-full' style={{ backgroundColor: `${option}` }}></div>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}


interface IProps {
  data: IBag
  product?: IProduct
  price: {
    id: number;
    price: number;
    discount: number;
  }[]
  setPrice: Dispatch<SetStateAction<{
    id: number;
    price: number;
    discount: number;
  }[]>>
}
const Item = ({ data, product, price, setPrice }: IProps) => {
  const [count, setCount] = useState<number>(data.count)

  let allSize = ['XS', 'S', 'M', 'L', 'XL']
  let allColor = ['red', 'pink', 'blue', 'black']
  if (product) {
    allSize = product.size
    allColor = product.color
  }

  const changeCount = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (product) {
      let priceFilter = price.filter(p => p.id !== data.id)
      if (target.innerText === '-') {
        let num = count - 1
        setCount(num)
        setPrice([...priceFilter, { id: data.id, price: num * product.price, discount: num * (product.price - (product.price - (product.price / 100) * product.onSale)) }])
      } else {
        let num = count + 1
        setCount(num)
        setPrice([...priceFilter, { id: data.id, price: num * product.price, discount: num * (product.price - (product.price - (product.price / 100) * product.onSale)) }])
      }
    }
  }

  return product ? (
    <>
      <div className="border border-dark-100 border-solid flex h-[250px] w-[800px]">
        <div className="flex items-center">
          <Image src={product.img} alt="" width={180} height={180} />
        </div>
        <div className="flex flex-col justify-between p-8 pb-2 min-w-[50%]">
          <SubTitle2 className="text-light-300">{product.name}</SubTitle2>
          <div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-4 items-center"><span>Size: </span> {Size(allSize, allSize.indexOf(data.size))}</div>
              <div className="flex gap-4 items-center"><span>Color: </span> {Color(allColor, allColor.indexOf(data.color))}</div>
            </div>
            <div className="flex items-center justify-between">
              <ButtonGroup color="secondary" variant="outlined">
                <Button onClick={changeCount} disabled={count === 1}>-</Button>
                <Button className="cursor-default">{count}</Button>
                <Button onClick={changeCount}>+</Button>
              </ButtonGroup>
              <span className="text-red-dark-100 mr-16">{count * product.price}$</span>
            </div>
          </div>
          <div>
            <BasicButton color="secondary" variant="text">Delete</BasicButton>
            <Tooltip title='Add favorites and delete from cart'>
              <BasicButton color="secondary" variant="text">Save for later</BasicButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  ) : <></>
}

export default Item;