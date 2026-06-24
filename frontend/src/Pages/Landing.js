import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Land from '../constants/pictures/landing.gif';

function Landing() {
  return (
    // 1. Changed main background to a deep, dark slate
    <div className='min-h-[70vh] flex flex-col items-center justify-center gap-7 p-4 mt-24 bg-slate-950'>
      
      <section className="flex flex-col lg:flex-row items-center justify-stretch py-20 md:px-12 rounded-lg gap-15 border-solid ">
        <div className="text-center md:text-left max-w-2xl">
          {/* 2. Added a stunning Fuchsia-to-Cyan text gradient for the main title */}
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 hover:animate-bounce line transition ease-in-out delay-150 pb-2">
            Compile and Conquer.
          </h1>
          <p className="mt-4 text-xl text-slate-400">Your journey starts here.</p>
          <a href={'/home'}>
            {/* 3. Button with a neon fuchsia glow effect */}
            <button className="mt-8 bg-fuchsia-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-fuchsia-500 hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(192,38,211,0.5)]">
            Get Started
          </button></a>
        </div>
        <div className="my-10"></div>
        <div className="mt-10 md:mt-0 md:ml-10 bg-black p-4 rounded-xl border border-slate-800">
          <img
            src={Land} 
            alt="Hero"
            // 4. Added a subtle cyan glow behind the image
            className="w-[60vw] h-[100vh] max-w-lg rounded-lg shadow-[0_0_25px_rgba(34,211,238,0.2)]" 
          />
        </div>
      </section>

      {/* 5. Bottom section styled as a premium dark card with a subtle colored border */}
      <section className="bg-slate-900 py-20 w-[90vw] rounded-2xl border border-fuchsia-500/30 shadow-[0_0_30px_rgba(192,38,211,0.1)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-cyan-200 p-2 border-b-2 border-cyan-500/30 inline-block">Your Ultimate Coding Companion.</p>
          <br/><br/><br/>
          <a href={"/home"}>
            {/* 6. Updated the Material UI button to match the new dark theme */}
            <Button 
              variant='contained' 
              sx={{
                color: '#ffffff', 
                backgroundColor: '#06b6d4', // Cyan-500
                fontWeight: 'bold',
                padding: '10px 30px',
                ":hover":{
                  backgroundColor: '#0891b2', // Cyan-600
                  transform: 'scale(1.1)'
                }
              }} 
            >
            Get Started
          </Button></a>
        </div>
      </section>
      <div className='flex flex-col items-center justify-center gap-7 h-70'>
        <br/>
      </div> 
    </div>
  );
}

export default Landing;