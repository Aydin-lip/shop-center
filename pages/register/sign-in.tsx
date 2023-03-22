import LoginGmail from "@/components/login/byGmail";
import Logo from "@/components/logo/shopCenter";
import { useAppContext } from "@/context/state";
import { Body2, Caption } from "@/mui/customize";
import { BasicButton } from "@/mui/customize";
import { Heading5 } from "@/mui/customize";
import { signIn } from "@/services/http.service";
import { Alert, Checkbox, FormControlLabel, FormGroup, TextField, Tooltip } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [passwordErr, setPasswordErr] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean | null>(null)

  const { info, setInfo } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (info._id > '1') {
      router.replace('/')
    }
  }, [info])

  const signInFunc = async () => {
    if (!email.includes("@")) setEmailErr(true)
    if (password.length < 8) setPasswordErr(true)
    if (email.includes("@") && password.length >= 8) {
      setLoading(true)
      signIn({ email, password })
        .then(res => {
          setLogin(true)
          setTimeout(() => {
            setLogin(null)
          }, 3000);
          setInfo(res.data.user)
          if (remember) localStorage.setItem("token", res.data.user.token)
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
        <div className="absolute top-0 my-4 flex flex-col items-center max-w-sm w-full px-12 py-8 bg-dark-50 rounded-xl border border-solid border-dark-100">
          <div>
            <Logo />
          </div>
          <Heading5 className="py-8">Welcome Back!</Heading5>
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
              onChange={e => {
                setPassword(e.target.value)
                if (passwordErr && e.target.value.length >= 8) setPasswordErr(false)
              }}
            />

            <div className="flex items-center justify-between">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={remember} onChange={() => setRemember(!remember)} color="primary" />}
                  label={<Body2>Remember me</Body2>}
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
                className="w-full"
                onClick={signInFunc}
                disabled={loading}
              >Sign In</BasicButton>
            </span>
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