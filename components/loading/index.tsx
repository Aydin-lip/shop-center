import { PuffLoader } from "react-spinners"

const Loading = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center   fixed z-50 bg-container">
        <PuffLoader color="#DD0426" size={100} />
        {/* <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '.5s'}}></div>
          <div className="w-14 h-14 bg-red-dark-100 rounded-full absolute animate-ping" style={{animationDelay: '.8s'}}></div> */}
      </div>
    </>
  )
}

export default Loading