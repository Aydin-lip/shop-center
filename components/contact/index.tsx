import { BasicButton, BasicTextField } from "@/mui/customize";
import { TextField } from "@mui/material";

const listForm = ['name', 'email', 'phone number', 'message'];

const ContactUs = () => {
  return (
    <div className="bg-form border border-solid border-dark-100 w-3/5 flex flex-col items-center justify-center gap-7 py-20">
      {listForm.map(item =>
        item === 'message' ?
          <TextField
            label={item}
            multiline
            rows={4}
            focused
            sx={{ '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': { color: '#424242', fontFamily: 'Inter !important' }, }}
            color="secondary"
            className="w-96"
          /> :
          <BasicTextField
            color="secondary"
            label={item}
            focused
            sx={{ '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { fontFamily: 'Inter !important' } }}
            className={`${item === 'message' && 'h-32'} w-96 text-light-200 font-inter`}
          />
      )}
      <BasicButton variant="contained" className="w-96 font-inter mt-8">Submit</BasicButton>
    </div>
  )
}

export default ContactUs