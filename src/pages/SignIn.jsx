import React from 'react'

const SignIn = () => {
      return (
            <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[400px] h-auto border py-7'>
            <form className='flex flex-col items-center'>
            <h2>Sign in or create account</h2>
            <label htmlFor="num_email"><b>Enter mobile number or email</b></label>
`           <input className='border w-80 rounded' type="email" name="num_email" />
            <button className='bg-yellow-400 w-80 py-1 rounded-full mt-3'>Continue</button>        `
            </form>
            </div>
            </div>
      )
}

export default SignIn