import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function GenreList({genreId}) {
//console.log(genreId)
const [genreList, setGenreList] = useState([])
const [activeIndex, setActiveIndex] = useState(0)

const getGenreList = () =>{
    GlobalApi.getGenreList.then((res)=>{
    //console.log(res.data.results);
        setGenreList(res.data.results)
    })
}

useEffect (() =>{
    getGenreList();
},[])

  return (
    <div className='px-6'>
        <h2 className='text-[30px] font-bold dark:text-white'> Genre </h2>
            {
                genreList.map((value,index)=>(
                
                    <div key={index} onClick={()=>{setActiveIndex(index), genreId(value.id)}} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg group hover:dark:bg-gray-600
                        ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600":null}`}>
                        <img src={value.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
                             ${activeIndex == index ? "scale-105":null}`}/>
                        <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300
                            ${activeIndex == index ? "font-bold":null}`}>
                            {value.name}</h3>
                            
                    </div>
                ))
            }
    </div>
  )
}

export default GenreList;