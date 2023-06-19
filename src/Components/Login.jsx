import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import authContext from '../context'

function Login () {
  const formStyleInput =
    'block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
  const formStylelabel = 'block text-sm font-semibold text-gray-800'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // const { setAuthenticated } = useContext(authContext)

  async function loginUser (credentials) {
    return fetch('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.status)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await loginUser({
      email,
      password
    })
    // console.log(response)
    if (response === 200) {
      // setAuthenticated(true)
      navigate('/form')
    } else {
      alert('Invalid User..')
      e.target.reset()
    }
  }

  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-purple-700'>
          Login
        </h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label className={formStylelabel}>Email</label>
            <input
              type='email'
              className={formStyleInput}
              placeholder='Enter your Email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className={formStylelabel}>Password</label>
            <input
              type='password'
              className={formStyleInput}
              placeholder='Enter your Password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <a href='/forget' className='text-xs text-purple-600 hover:underline'>
            Forget Password?
          </a>
          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
