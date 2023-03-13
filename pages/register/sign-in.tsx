import LoginGmail from "@/components/login/byGmail";
import Logo from "@/components/logo/shopCenter";
import { useAppContext } from "@/context/state";
import { Body2, Caption } from "@/mui/customize";
import { BasicButton } from "@/mui/customize";
import { Heading5 } from "@/mui/customize";
import { Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn = () => {
  const { info } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (info._id !== '0') {
      router.replace('/')
    }
  }, [info])

  return info._id === '0' && (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Sign In - Shop Center</title>
      </Head>
      <div className="absolute bg-container top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <div className="absolute top-0 my-4 flex flex-col items-center max-w-sm w-full px-12 py-8 bg-dark-50 rounded-xl border border-solid border-dark-100">
          <div>
            <Logo />
          </div>
          <Heading5 className="py-8">Welcome Back!</Heading5>
          <form className="flex flex-col gap-6 w-full max-w-sm">
            <TextField type="text" size="small" label="Phone number" variant="outlined" color="secondary" />
            <TextField type="password" size="small" label="Password" variant="outlined" color="secondary" />
            <div className="flex items-center justify-between">
              <FormGroup>
                <FormControlLabel control={<Checkbox color="primary" />} label={<Body2>Remember me</Body2>} />
              </FormGroup>
              <span>
                <Link href='/' className="no-underline">
                  <Body2 className="text-red-dark-100">
                    Forgot Password?
                  </Body2>
                </Link>
              </span>
            </div>
            <BasicButton variant="contained" color="primary">Sign In</BasicButton>
            <Caption className="flex justify-center items-center gap-1 cursor-default">
              Don’t Have An Account?
              <Link href='/register/sign-up' className="no-underline text-red-dark-100">
                Sign Up Now
              </Link>
            </Caption>
          </form>
          <div className="pt-8">
            <LoginGmail login="Sign In" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;