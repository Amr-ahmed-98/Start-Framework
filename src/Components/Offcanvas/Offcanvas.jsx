const Offcanvas = ({imageSrc,onClose }) => {
    
  return (
    <>
 <div className={`top-0 bottom-0 left-0 right-0 bg-offcanvas-bg fixed z-[100]`} onClick={onClose}>
       <div className="container">
        <div className="grid grid-cols-1 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <img src={imageSrc} alt="illustration" className='w-full'/>
        </div>
       </div>
    </div>
    </>
  )
}

export default Offcanvas