import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
// Componnets
import LoginGmail from "@/components/login/byGmail";
import Logo from "@/components/logo/shopCenter";
// Context for get data
import { useAppContext } from "@/context/state";
// Mui
import { Body2, Caption } from "@/mui/customize";
import { BasicButton } from "@/mui/customize";
import { Heading5 } from "@/mui/customize";
import { Alert, Checkbox, FormControlLabel, FormGroup, TextField, Tooltip } from "@mui/material";
// Api signIn
import { signIn } from "@/services/http.service";


const SignIn = () => {
  // States
  const [email, setEmail] = useState<string>("")
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [passwordErr, setPasswordErr] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean | null>(null)

  const { info, setInfo } = useAppContext()

  const router = useRouter()
  useEffect(() => {
    // Checks whether the user is logged in or not
    if (info._id > '1') {
      router.replace('/')
    }
  }, [info])

  // SignIn function for send user data to Api
  const signInFunc = async () => {
    // It checks whether the user has entered the inputs correctly or not
    if (!email.includes("@")) setEmailErr(true)
    if (password.length < 8) setPasswordErr(true)
    // If entered the inputs correctly send data
    if (email.includes("@") && password.length >= 8) {
      setLoading(true)
      signIn({ email, password })
        .then(res => {
          setLogin(true)
          setTimeout(() => {
            setLogin(null)
          }, 3000);
          setInfo(res.data.user) // Save responsive in context
          if (remember) localStorage.setItem("token", res.data.user.token) // Save token in user localstorage
          router.replace('/')
          setLoading(false)
        })
        .catch(err => {
          setLogin(false)
          setLoading(false)
          setTimeout(() => {
            setLogin(null)
          }, 3000);
        })
    }
  }

  return info._id <= '1' && (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Sign In - Shop Center</title>
      </Head>
      <div className="absolute bg-container top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <div className="w-full h-full md:h-auto flex justify-center">
          <div className="them-register-bg md:my-4 flex flex-col items-center md:max-w-sm w-full h-full md:h-auto md:px-12 py-4 md:py-8 rounded-xl border border-solid border-dark-100">
            <Link href='/' className="no-underline">
              <Logo />
            </Link>
            <Heading5 className="py-8 them-register-title">Welcome Back!</Heading5>
            <form className="flex flex-col gap-6 w-full max-w-sm">
              <TextField
                error={emailErr}
                name="email"
                type="email"
                size="small"
                label="Email"
                variant="outlined"
                color="secondary"
                value={email}
                className="them-register-input"
                onChange={e => {
                  setEmail(e.target.value)
                  if (emailErr && e.target.value.includes('@')) setEmailErr(false)
                }}
              />
              <TextField
                error={passwordErr}
                name="password"
                type="password"
                size="small"
                label="Password"
                variant="outlined"
                color="secondary"
                value={password}
                className="them-register-input"
                onChange={e => {
                  setPassword(e.target.value)
                  if (passwordErr && e.target.value.length >= 8) setPasswordErr(false)
                }}
              />

              <div className="flex items-center justify-between">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={remember} onChange={() => setRemember(!remember)} color="primary" className="them-register-color" />}
                    label={<Body2 className="them-register-color">Remember me</Body2>}
                  />
                </FormGroup>
                <span>
                  {/* <Link href='/' className="no-underline"> */}
                  <Tooltip title="It will be built soon">
                    <Body2 className="text-red-dark-100">
                      Forgot Password?
                    </Body2>
                  </Tooltip>
                  {/* </Link> */}
                </span>
              </div>
              <span className={loading ? 'cursor-progress' : ''}>
                <BasicButton
                  variant="contained"
                  color="primary"
                  className="w-full bg-red-dark-100"
                  onClick={signInFunc}
                  disabled={loading}
                >Sign In</BasicButton>
              </span>
              <Caption className="flex justify-center items-center gap-1 cursor-default them-register-color">
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
      </div>
      <div className='max-w-lg fixed bottom-0 left-0 p-4'>
        {login === false &&
          <Alert
            variant="outlined"
            severity="error"
          >
            The username or password is wrong.
          </Alert>
        }
        {login &&
          <Alert
            variant="outlined"
            severity="success"
          >
            You have successfully Sign In.
          </Alert>
        }
      </div>
    </>
  )
}

export default SignIn;