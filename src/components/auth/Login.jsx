import React, { useState} from 'react'
const Login = () => {

  const[email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("email is", email)
    console.log("password is",password)

    setEmail("")
    setpassword("")

    
  }
  return(
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
      
        <form
        onSubmit={(e)=>
           submitHandler(e)
         }
         className='flex flex-col items-center justify-center'> </form> 
         <input
         value={email}
         onChange={(e)=>
            setEmail(e.target.value)
            }
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-grey-400' type="email" placeholder='enter your email' />
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}  
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placefolder:text-gray-400' type="password" placeholder='Enter password' />
            <button classname='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>


           












          
            </div>
             </div>
  )}




export default Login
