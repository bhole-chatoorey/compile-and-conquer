import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate,  } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [isLoading,setIsLoading]= useState(false)
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });
  
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:5000/api/user/login', formData, {
        withCredentials: true,
      });
      console.log(data)
      localStorage.setItem('user', data.user.username);
      toast.success(data.message)
      redirect('/')
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
      navigate('/');
    }
    window.location.reload()
  };

  return (
    // 1. Container: Dark slate background, fuchsia border, and a subtle glowing shadow. 
    // Added max-w-md and mx-auto so it forms a nice, centered card!
    <div className='min-h-[60vh] max-w-md w-11/12 mx-auto bg-slate-900 border border-fuchsia-500/30 rounded-2xl shadow-[0_0_30px_rgba(192,38,211,0.15)] flex flex-col items-center justify-center gap-4 p-8 mt-24'>
      
      {/* 2. Title: Gradient text to match the landing page */}
      <h1 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 pb-2 mb-4'>LOGIN</h1>
      
      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
        {/* 3. Inputs: Dark backgrounds, light text, and cyan focus rings */}
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          className='w-full p-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300'
        />
        <input 
          type="text" 
          placeholder="Username" 
          value={formData.username} 
          onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
          className='w-full p-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300'
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          className='w-full p-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300'
        />
        
        {/* 4. Button: Fuchsia background with a neon glow effect on hover */}
        <button 
          disabled={isLoading} 
          type="submit" 
          className='w-full mt-4 p-3 bg-fuchsia-600 text-white font-bold rounded-lg hover:bg-fuchsia-500 disabled:opacity-50 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(192,38,211,0.4)]' 
        >
          Login
        </button>
      </form>

      {/* 5. Link: Changed to a bright cyan so it pops against the dark background */}
      <a href={'/register'} className="mt-4">
        <p className='text-cyan-400 font-semibold hover:text-cyan-300 hover:scale-105 transition-all duration-300'>
          New registration? Sign-up
        </p>
      </a>
    </div>
  );
};

export default Login;