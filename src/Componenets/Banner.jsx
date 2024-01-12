import React, { useEffect } from 'react'

function Banner({bannerGame}) {
    useEffect(()=>{
        //console.log(bannerGame);
    })
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] font-bold text-white'>{bannerGame.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'> Get Now</button>
        </div>
        <img src={bannerGame.background_image} className='w-full h-[350px] object-cover rounded-xl'/>
    </div>
  )
}

export default Banner