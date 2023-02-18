// MUI
import { Display1, IOSSwitch, BasicButton, BasicTextField } from "@/mui/customize";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <Display1 className="">
        Hello, Next.js!
      </Display1>
      <BasicTextField label="example label" color="secondary" focused />
      <Checkbox color="primary" />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked color="primary" />}
        label="iOS style"
      />
      <BasicButton variant="contained" color="primary">Click Me!</BasicButton>
    </>
  )
}
