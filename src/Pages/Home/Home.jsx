import img1 from '../../assets/images/avataaars.svg'
const Home = () => {
 

  return (
    <>
    <div className="min-h-[85vh]  bg-torquaze-color">
        <div className="container min-h-[85vh]  flex flex-col items-center justify-center">
        <img src={img1} className='w-1/5' alt="illustration" />
            <h1 className="text-4xl font-bold text-white">START FRAMEWORK</h1>
            <div className='my-4 relative after:absolute after:w-[50px] after:h-1 after:bg-white after:top-1/2 after:left-8 before:absolute before:w-[50px] before:h-1 before:bg-white before:top-1/2 before:right-8'>
            <i className="fa-solid fa-star text-white text-lg "></i>
            </div>
            <span className='text-white'>Graphic Artist - Web Designer - Illustrator</span>
        </div>
    </div>
    </>
  )
}

export default Home