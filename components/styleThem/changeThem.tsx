// Effect change them on screen
const ChangeThem = ({ change }: { change: boolean }) => {
  return (
    <>
      <div
        className={`bg-container fixed transition-all duration-1000 z-50 ${change ? 'top-[-10rem] right-[-10rem] bottom-[-10rem] left-[-10rem]' : ''}`
        }></div>
    </>
  )
}

export default ChangeThem