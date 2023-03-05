import LoginGmail from "@/components/login/byGmail";
import Logo from "@/components/logo/shopCenter";
import { Caption } from "@/mui/customize";
import { BasicButton } from "@/mui/customize";
import { Heading5 } from "@/mui/customize";
import { TextField } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Sign Up - Shop Center</title>
      </Head>
      <div className="fixed overflow-auto bg-container top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <div className="absolute top-0 my-4 flex flex-col items-center max-w-sm w-full px-12 py-8 bg-dark-50 rounded-xl border border-solid border-dark-100">
          <div>
            <Logo />
          </div>
          <Heading5 className="pt-8">Create Account!</Heading5>
          <Caption className="flex justify-center items-center gap-1 cursor-default py-4">
            Already Have An Account?
            <Link href='/register/sign-in' className="no-underline text-red-dark-100">
              Sign In
            </Link>
          </Caption>
          <form className="flex flex-col gap-4 w-full max-w-sm">

            <div className="flex gap-4">
              <TextField type="text" size="small" label="Name" variant="outlined" color="secondary" />
              <TextField type="text" size="small" label="LastName" variant="outlined" color="secondary" />
            </div>
            <TextField type="text" size="small" label="Phone number" variant="outlined" color="secondary" />
            <TextField type="email" size="small" label="Email" variant="outlined" color="secondary" />
            <TextField type="password" size="small" label="Password" variant="outlined" color="secondary" />

            <BasicButton variant="contained" color="primary">Sign Up</BasicButton>
          </form>
          <div className="pt-8">
            <LoginGmail login="Sign Up" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;