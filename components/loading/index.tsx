import { useAppContext } from "@/context/state"
import { PuffLoader } from "react-spinners"

const Loading = ({ children }: { children: JSX.Element }) => {
  const { loading } = useAppContext()
  return (
    <>
      {loading ?
        <div className="w-screen h-screen flex justify-center items-center">
          <PuffLoader color="#DD0426" size={100} />
          {/* <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '.5s'}}></div>
          <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '.8s'}}></div> */}
        </div>
        : children
      }
    </>
  )
}

export default Loading