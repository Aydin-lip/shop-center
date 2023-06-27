// Mui
import { Heading4, Heading5 } from "@/mui/customize"
import { TextField, InputAdornment, Tooltip } from "@mui/material"
import { East, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { Caption, SubTitle2 } from "@/mui/customize";
// Items footer
const itemsFooter: string[] = ['Home', 'Women', 'men', 'kids', 'On Sale', 'Contact Us'];

const Footer = () => {
  return (
    <footer
      className="them-footer overflow-hidden w-full flex flex-col mt-10 justify-center items-center pt-9 pb-2 bg-[url('/images/footer/bg-Footer.jpg')] bg-cover bg-bottom-right-_7 bg-origin-border"
    >
      <div></div>
      <Heading5 className="font-poppins text-center max-[400px]:text-xl">
        Join Our Community to Get More<br />
        Discount Every Week
      </Heading5>
      <div className="w-full flex justify-center max-w-[200px] min-[350px]:max-w-[400px] max-[400px]:mx-2">
        <TextField
          size="small"
          placeholder="Email Address"
          className="them-footer-email bg-container border-none py-2 pl-6 pr-1.5 rounded-lg mt-8 max-[400px]:my-4 mb-12 font-poppins font-medium w-11/12"
          sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
          variant="standard"
          color="secondary"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <East color="primary" className="bg-red-dark-100 w-8 h-8 text-container p-1.5 rounded-md cursor-pointer" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="flex flex-row items-center">
        {/* <div className="relative">
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
        <span className="h-4 w-px bg-[#000000] ml-12 mr-14"></span> */}
        <ul className="list-none flex flex-row items-center justify-center p-0 max-[400px]:my-2">
          <Tooltip placement="top" title="Instagram">
            <li className="flex justify-center items-center mr-4 cursor-pointer"><Instagram className="text-light-100" /></li>
          </Tooltip>
          <Tooltip placement="top" title="Facebook">
            <li className="flex justify-center items-center mx-4 cursor-pointer"><Facebook className="text-light-100" /></li>
          </Tooltip>
          <Tooltip placement="top" title="Twitter">
            <li className="flex justify-center items-center mx-4 cursor-pointer"><Twitter className="text-light-100" /></li>
          </Tooltip>
        </ul>
      </div>
      <Caption className="text-light-100 mt-4">© 2023 All Rights Reserved</Caption>
    </footer>
  )
}

export default Footer