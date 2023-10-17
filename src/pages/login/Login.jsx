import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <React.Fragment>
      <div id="login">
        <div className="login-wrapper">
          <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-10">
            <h3 className='bg-[#79929C] text-xl font-semibold my-2 text-white px-20 sm:px-24 md:px-32 py-4'>লগিন</h3>
            <p className='text-lg font-medium mt-5'>Home / <span className='text-red-800'> login</span></p>
          </div>

          <div className='login-inner bg-[#E8E8E8] py-14 px-4 sm:px-6 md:px-8 lg:px-10'>
            <h3 className='text-center text-xl capitalize font-semibold mb-8'>Login to your account</h3>
            <div className='login-innerFrom'>
              <input type="text" className='px-5 py-4 my-2 outline-none' placeholder='User Name:' />
              <input type="password" className='px-5 py-4 my-2 outline-none' placeholder='Password:' />
              <a href="##" className='w-full bg-[#79929C] my-2 text-center text-white text-lg py-4'>Login</a>
              <p className='cursor-pointer underline capitalize text-lg font-medium text-end mt-4'>reset your password</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login