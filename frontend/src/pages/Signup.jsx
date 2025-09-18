import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { loginSuccess, loginFailure } from '../Redux/authSlice';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, error } = useSelector((state) => state.auth);

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'https://assignment-fullstack-5.onrender.com/auth/signup',
        { username, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        dispatch(loginSuccess({
          token: response.data.token,  // make sure backend sends this
          user: username
        }));
        toast.success('Signup Successful ✅');
        navigate('/contractsDashboard');
      } else {
        dispatch(loginFailure(response.data.error || 'Signup failed'));
      }
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.error || 'Signup request failed'));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-blue-300 to-blue-600'>
      <div className="bg-gradient-to-b from-black to-blue-600 text-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Signup here...</h1>

          <div className="flex flex-col items-center m-4 ">
            <p className='text-gray-400 text-sm font-extralight text-center'>
              I suryakant Dwivedi welcome you to my Assignment. I am working on MERN stack development along with DevOps now.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Username"
              className="bg-white text-black px-10 py-1.5 rounded-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white text-black px-10 py-1.5 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </button>
          </div>

          <div className="mt-4">
            <p className="text-gray-300">
              Already have an account? &nbsp;
              <span className="text-blue-200 cursor-pointer font-bold">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
