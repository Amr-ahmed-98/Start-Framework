import { useState } from "react"

const Contact = () => {
  const [userName,setUserName] = useState('');
  const [userAge,setUserAge] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPassword,setUserPassword] = useState('');
  return (
    <>
    <div className="min-h-[100vh] ">
      <div className="container">
      <div className='h-[25vh] flex flex-col justify-end items-center'>
          <h2 className='text-4xl text-slate-700 font-bold '>
          CONATCT SECTION
          </h2>
          <div className='my-4 relative after:absolute after:w-[100px] after:h-1 after:bg-slate-700 after:top-1/2 after:left-16 before:absolute before:w-[100px] before:h-1 before:bg-slate-700 before:top-1/2 before:right-10'>
            <i className='fa-solid fa-star text-slate-700 text-lg absolute left-1/2 top-1/2 -translate-y-1/2'></i>
          </div>
        </div>
        <form className="mt-16 h-[60vh] flex flex-col gap-16 justify-center ">
          <div className="grid grid-cols-1  gap-5">
            <label className={`w-1/2 mx-auto ${userName ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'} text-torquaze-color `} htmlFor="userName">userName</label>
            <input type="text" className=" w-1/2 mx-auto border-b focus:outline-none" placeholder="userName" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <label className={`w-1/2 mx-auto ${userAge ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'} text-torquaze-color`} htmlFor="userAge">userAge</label>
            <input type="number" className=" w-1/2 mx-auto border-b focus:outline-none" placeholder="userAge" onChange={(e)=>setUserAge(e.target.value)} value={userAge} />
          </div>
          <div className="grid grid-cols-1 gap-5">
          <label className={`w-1/2 mx-auto ${userEmail ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'} text-torquaze-color`} htmlFor="userEmail">userEmail</label>
            <input type="email" className=" w-1/2 mx-auto border-b focus:outline-none" placeholder="userEmail" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} />
          </div>
          <div className="grid grid-cols-1 gap-5">
          <label className={`w-1/2 mx-auto ${userPassword ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'} text-torquaze-color`} htmlFor="userPassword">userPassword</label>
            <input type="password" className=" w-1/2 mx-auto border-b focus:outline-none" placeholder="userPassword" onChange={(e)=>setUserPassword(e.target.value)} value={userPassword} />
          </div>
          <div className="w-1/2 mx-auto ">
            <button className="bg-torquaze-color p-3 text-white rounded-md">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact