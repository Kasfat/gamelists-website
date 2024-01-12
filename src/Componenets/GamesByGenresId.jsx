import React, { useEffect } from 'react'

function GamesByGenresId({gameList}) {
    useEffect(()=>{
        //console.log(gameList)
    })
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'> populer Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>
        {gameList.map((val,index)=>(
            <div key={index} className='bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={val.background_image} className='h-[80%] rounded-xl object-cover w-full'/>
                <h2 className='font-bold text-[18px] dark:text-white'>{val.name} <span className='p-1 text-[10px] ml-2 rounded-sm bg-green-100 text-green-700 font-medium'>{val.metacritic}</span></h2>
                <h2 className='text-gray-600 dark:text-gray-300'>⭐{val.rating} 💬{val.reviews_count} 🔥{val.suggestions_count}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesByGenresId;