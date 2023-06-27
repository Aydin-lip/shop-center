import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// Componnets
import LoginGmail from "@/components/login/byGmail";
import Logo from "@/components/logo/shopCenter";
// Context for get data
import { useAppContext } from "@/context/state";
// Mui
import { Caption } from "@/mui/customize";
import { BasicButton } from "@/mui/customize";
import { Heading5 } from "@/mui/customize";
import { Alert, TextField } from "@mui/material";
// Api signIn
import { signUp } from "@/services/http.service";

// Interface form & error form
interface IFrom {
  name: string
  lastName: string
  phone: string
  email: string
  password: string
}
interface IFromErr {
  name: boolean
  phone: boolean
  email: boolean
  password: boolean
}

const SignUp = () => {
  // States
  const [form, setForm] = useState<IFrom>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  })
  const [formErr, setFormErr] = useState<IFromErr>({
    name: false,
    phone: false,
    email: false,
    password: false
  })
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

  // SignUp function for send user data to Api
  const signUpFunc = () => {
    // It checks whether the user has entered the inputs correctly or not
    let err = {
      name: false,
      phone: false,
      email: false,
      password: false
    }
    if (form.name.length < 3) err.name = true
    if (form.phone.length < 8) err.phone = true
    if (!form.email.includes("@")) err.email = true
    if (form.password.length < 8) err.password = true
    setFormErr(err)
    // If entered the inputs correctly send data
    if (
      !err.name &&
      !err.phone &&
      !err.email &&
      !err.password
    ) {
      setLoading(true)
      // List data for send
      let user = {
        fullname: `${form.name} ${form.lastName}`,
        phone: form.phone,
        email: form.email,
        password: form.password
      }
      signUp(user)
        .then(res => {
          setLogin(true)
          setInfo(res.data.user) // Save responsive in context
          localStorage.setItem("token", res.data.user.token) // Save token in user localstorage
          router.replace('/')
          setLoading(false)
          setTimeout(() => {
            setLogin(null)
          }, 3000);
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
        <title>Sign Up - Shop Center</title>
      </Head>
      <div className="fixed overflow-auto bg-container top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <div className="w-full h-full md:h-auto flex justify-center">
          <div className="them-register-bg md:my-4 flex flex-col items-center md:max-w-sm w-full h-full md:h-auto md:px-12 py-4 md:py-8 rounded-xl border border-solid border-dark-100">
            <Link href='/' className="no-underline">
              <Logo />
            </Link>
            <Heading5 className="pt-8 them-register-title">Create Account!</Heading5>
            <Caption className="flex justify-center items-center gap-1 cursor-default py-4 them-register-color">
              Already Have An Account?
              <Link href='/register/sign-in' className="no-underline text-red-dark-100">
                Sign In
              </Link>
            </Caption>
            <form className="flex flex-col gap-4 w-full max-w-sm">

              <div className="flex gap-4">
                <TextField
                  type="text"
                  size="small"
                  label="Name"
                  variant="outlined"
                  color="secondary"
                  error={formErr.name}
                  value={form.name}
                  className="them-register-input"
                  onChange={e => {
                    setForm({ ...form, name: e.target.value })
                    if (formErr.name && e.target.value.length >= 3) setFormErr({ ...formErr, name: false })
                  }}
                />
                <TextField
                  type="text"
                  size="small"
                  label="LastName"
                  variant="outlined"
                  color="secondary"
                  value={form.lastName}
                  className="them-register-input"
                  onChange={e => {
                    setForm({ ...form, lastName: e.target.value })
                  }}
                />
              </div>
              <TextField
                type="text"
                size="small"
                label="Phone number"
                variant="outlined"
                color="secondary"
                error={formErr.phone}
                value={form.phone}
                className="them-register-input"
                onChange={e => {
                  setForm({ ...form, phone: e.target.value })
                  if (formErr.phone && e.target.value.length >= 8) setFormErr({ ...formErr, phone: false })
                }}
              />
              <TextField
                type="email"
                size="small"
                label="Email"
                variant="outlined"
                color="secondary"
                error={formErr.email}
                value={form.email}
                className="them-register-input"
                onChange={e => {
                  setForm({ ...form, email: e.target.value })
                  if (formErr.email && e.target.value.includes("@")) setFormErr({ ...formErr, email: false })
                }}
              />
              <TextField
                type="password"
                size="small"
                label="Password"
                variant="outlined"
                color="secondary"
                error={formErr.password}
                value={form.password}
                className="them-register-input"
                onChange={e => {
                  setForm({ ...form, password: e.target.value })
                  if (formErr.password && e.target.value.length >= 8) setFormErr({ ...formErr, password: false })
                }}
              />

              <span className={loading ? 'cursor-progress' : ''}>
                <BasicButton
                  variant="contained"
                  color="primary"
                  className="w-full bg-red-dark-100"
                  onClick={signUpFunc}
                  disabled={loading}
                >Sign Up</BasicButton>
              </span>
            </form>
            <div className="pt-8">
              <LoginGmail login="Sign Up" />
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
            A problem has occurred. Please try again in a few minutes.
          </Alert>
        }
        {login &&
          <Alert
            variant="outlined"
            severity="success"
          >
            You have successfully Sign Up.
          </Alert>
        }
      </div>
    </>
  )
}

export default SignUp;