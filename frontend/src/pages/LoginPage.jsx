import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { login } from '../Redux/authSlice'
import  ContractsDashboard  from './ContractsDashboard'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token, error } = useSelector((state) => state.auth)

  const handleLogin = () => {
    dispatch(login({ username, password }))
  }

  useEffect(() => {
    if (token) {
      toast.success('Login Successfully ✅')
      navigate('/contractsDashboard')
    }
  }, [token, navigate])

   useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

 return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-blue-300 to-blue-600'>
      <div className="  bg-gradient-to-b from-black to-blue-600 text-white p-8 rounded-lg shadow-lg w-96">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-2xl font-bold">Login here...</h1>
      </div>

      <div className="flex flex-col items-center m-4 ">
        <p className='text-gray-400 text-sm font-extralight text-center'>I suryakant Dwivedi welcome you to my Assignment. I am working on MERN stack development along with Devops now.</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
      <input
       type="text"
       placeholder="Username"
       className=" bg-white text-black px-10 py-1.5 rounded-xl align-left"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />
      <input
       type="password"
       placeholder="Password"
       className=" bg-white text-black px-10 py-1.5 rounded-xl align-left"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      </div>
      <p className='text-gray-300 mt-4 cursor-pointer'>Forget Password</p>
      <div className="mt-4">
        <p className="text-gray-300">Don't have an account? &nbsp;<span className="text-blue-200 cursor-pointer font-bold">Sign Up</span></p>
      </div>
      
      </div>
    </div>
    </div>
  )
}

export default Login