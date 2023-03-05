import ContactUs from "@/components/contact"
import Layout from "@/components/layout"
import { Heading4, Heading6 } from "@/mui/customize"

const index = () => {
  return (
    <Layout title='Contact Us'>
      <div className="container mx-auto flex flex-row items-start justify-center mt-24">
        <div className="flex flex-col items-start w-2/5">
          <Heading4 className="text-light-300 mt-12 mb-20">How Can I Help You?</Heading4>
          <div className="flex flex-row items-center justify-start">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 22.75H9C4.59 22.75 3.25 21.41 3.25 17V7C3.25 2.59 4.59 1.25 9 1.25H15C19.41 1.25 20.75 2.59 20.75 7V17C20.75 21.41 19.41 22.75 15 22.75ZM9 2.75C5.42 2.75 4.75 3.43 4.75 7V17C4.75 20.57 5.42 21.25 9 21.25H15C18.58 21.25 19.25 20.57 19.25 17V7C19.25 3.43 18.58 2.75 15 2.75H9Z" fill="#A7A7A7" />
              <path d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z" fill="#A7A7A7" />
              <path d="M12.0002 19.86C10.7302 19.86 9.7002 18.83 9.7002 17.56C9.7002 16.29 10.7302 15.26 12.0002 15.26C13.2702 15.26 14.3002 16.29 14.3002 17.56C14.3002 18.83 13.2702 19.86 12.0002 19.86ZM12.0002 16.75C11.5602 16.75 11.2002 17.11 11.2002 17.55C11.2002 17.99 11.5602 18.35 12.0002 18.35C12.4402 18.35 12.8002 17.99 12.8002 17.55C12.8002 17.11 12.4402 16.75 12.0002 16.75Z" fill="#A7A7A7" />
            </svg>
            <Heading6 className="text-light-100 ml-2">+98 0123456789</Heading6>
          </div>
          <div className="flex flex-row items-center justify-start mt-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="#A7A7A7" />
              <path d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z" fill="#A7A7A7" />
            </svg>
            <Heading6 className="text-light-100 ml-2">example@gmail.com</Heading6>
          </div>
        </div>
        <ContactUs />
      </div>
    </Layout>
  )
}

export default index