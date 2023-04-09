import { BasicButton, BasicTextField } from "@/mui/customize";
import { TextField } from "@mui/material";

const listForm = ['name', 'email', 'phone number', 'message'];

const ContactUs = () => {
  return (
    <div className="bg-form border border-solid border-dark-100 w-full min-[400px]:w-3/4 md:w-2/5 flex flex-col items-center justify-center gap-7 py-20">
      <BasicTextField
        size="small"
        color="secondary"
        label="name"
        className={`w-10/12 text-light-200 font-inter`}
      />
      <BasicTextField
        size="small"
        color="secondary"
        label="email"
        className={`w-10/12 text-light-200 font-inter`}
      />
      <BasicTextField
        size="small"
        color="secondary"
        label="phone number"
        className={`w-10/12 text-light-200 font-inter`}
      />
      <TextField
        label={'name'}
        multiline
        rows={4}
        size="small"
        color="secondary"
        className="w-10/12"
      />
      <BasicButton variant="contained" className="w-10/12 font-inter mt-8">Submit</BasicButton>
    </div>
  )
}

export default ContactUs