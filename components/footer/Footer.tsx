import { Heading4 } from "@/mui/customize"
import { TextField, InputAdornment } from "@mui/material"
import { East, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { Caption, SubTitle2 } from "@/mui/customize";

const itemsFooter: string[] = ['Home', 'Women', 'men', 'kids', 'On Sale', 'Contact Us'];

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col mt-10 justify-center items-center pt-9 pb-2 bg-[url('/images/footer/bg-Footer.jpg')] bg-cover bg-bottom-right-_7 bg-origin-border"
    >
      <div></div>
      <Heading4 className="font-poppins text-center">
        Join Our Community to Get More<br />
        Discount Every Week
      </Heading4>
      <TextField
        size="small"
        placeholder="Email Address"
        className="bg-container border-none py-2 pl-6 pr-1.5 rounded-lg mt-8 mb-12 font-poppins font-medium w-[415px]"
        sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
        variant="standard"
        color="secondary"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <East color="primary" className="bg-red-dark-200 text-container p-1.5 rounded-[4px] cursor-pointer" />
            </InputAdornment>
          )
        }}
      />
      {/* after:content-[''] after:absolute after:right-0
        after:top-0 after:h-4 after:w-px after:bg-[#000000] */}
      <div className="flex flex-row items-center">
        <div className="relative">
          <ul className="list-none flex flex-row items-center justify-center ">
            {itemsFooter.map((item, index) =>
              <SubTitle2
                key={item}
                className={`text-light-100 cursor-pointer ${index !== 0 && 'ml-4'} ${itemsFooter.length !== index + 1 && 'mr-4'}`}
              >
                {item}
              </SubTitle2>
            )}
          </ul>
        </div>
        <span className="h-4 w-px bg-[#000000] ml-12 mr-14"></span>
        <ul className="list-none flex flex-row items-center justify-center p-0">
          <li className="flex justify-center items-center mr-4 cursor-pointer"><Instagram className="text-light-100" /></li>
          <li className="flex justify-center items-center mx-4 cursor-pointer"><Facebook className="text-light-100" /></li>
          <li className="flex justify-center items-center mx-4 cursor-pointer"><Twitter className="text-light-100" /></li>
        </ul>
      </div>
      <Caption className="text-light-100 mt-4">© 2023 All Rights Reserved</Caption>
    </div >
  )
}

export default Footer