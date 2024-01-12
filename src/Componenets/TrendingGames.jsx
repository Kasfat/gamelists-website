import React, { useEffect } from 'react'

function TrendingGames({trendingGame}) {
    
    useEffect(()=>{
       // console.log(trendingGame);
})

  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className='mt-5 md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {trendingGame.map((val,index)=> index <4 && (
            <div key={index} className='bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={val.background_image} className='h-[270px] rounded-t object-cover'/>
                <h2 className='font-bold text-[18px] p-3 dark:text-white'>{val.name}</h2>
            </div>
             
        ))}
       
    </div>
    </div>
  )
}

export default TrendingGames