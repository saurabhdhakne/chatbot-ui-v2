import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import { IoClose } from 'react-icons/io5';

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [retryTimer, setRetryTimer] = useState(0);

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("email" + "password");
    console.log(email);
    console.log(password);
    setLoading(true); 
    setError(''); 

    try {
      const isAuthenticated = await login(email, password);
      console.log("success", isAuthenticated);
      if (isAuthenticated) {
        navigate('/'); 
      } else {
        setError('Invalid email or password');
        // startRetryTimer();
      }
    } catch (error) {
      setError(error.message || 'Login failed');
      // startRetryTimer();
    } finally {
      setLoading(false);
    }
  };

  // const startRetryTimer = () => {
  //   setRetryTimer(10);
  // };

  // useEffect(() => {
  //   if (retryTimer > 0) {
  //     const interval = setInterval(() => {
  //       setRetryTimer((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [retryTimer]);


  return (
    <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url('/login-page-img.jpg')` }}
        ></div>

            <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">MIS-Chat</h2>
                <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                {/* <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div className="px-4 py-3">
                        <svg className="h-6 w-6" viewBox="0 0 40 40">
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#FFC107" />
                            <path
                                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                fill="#FF3D00" />
                            <path
                                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                fill="#4CAF50" />
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#1976D2" />
                        </svg>
                    </div>
                    <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                </a> */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase"> login with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input 
                       onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"
                    />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                    </div>
                    <input 
                      onChange={(e) => setPassword(e.target.value)} 
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" 
                    />
                </div>
                <div className="mt-8">
                <button
                  onClick={handleLogin}
                  disabled={retryTimer > 0 || loading || !email || !password}
                  className={`${
                    retryTimer > 0 || loading || !email || !password
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-700 hover:bg-gray-600'
                  } text-white font-bold py-2 px-4 w-full rounded`}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                </div>
                
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
        {/* <p className='bg-orange-500 p-3 mt-4 shadow text-center max-w-sm mx-auto'>
                  {retryTimer > 0 && 
                    `Please wait ${retryTimer} seconds before retrying.`
                  }
                </p> */}
        {error && (
          <div
            className={`fixed bottom-5 right-5 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 transition-all duration-300 ${
              error ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>{error}</span>
            <button onClick={() => setError(null)} className="text-white">
              <IoClose />
            </button>
          </div>
        )}
    </div>
  )
}
