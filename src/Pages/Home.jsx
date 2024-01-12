import React, { useEffect, useState } from 'react'
import GenreList from '../Componenets/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Componenets/Banner';
import TrendingGames from '../Componenets/TrendingGames';
import GamesByGenresId from '../Componenets/GamesByGenresId';

function Home({genreId}) {

  //console.log(genreId)

  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([])

  useEffect(()=>{
    getAllGameList();
    getGameListByGenreId(4)
  },[])

const getAllGameList = () =>{
  GlobalApi.getAllGames.then((res)=>{
    //console.log(res.data.results);
    setAllGameList(res.data.results)
  })
}

const getGameListByGenreId = (id) =>{
  
  GlobalApi.getGameListByGenreId(id).then((res)=>{
   setGameListByGenres(res.data.results)
    
  })
}

  return (
    <>
    <div className='grid grid-cols-4 px-8'>
      <div className='hidden md:block'>
        <GenreList genreId= {(genreId)=>{getGameListByGenreId(genreId)}}/>
      </div>
      <div className=' col-span-4 md:col-span-3'>
        {allGameList.length > 0 && gameListByGenres.length > 0 ? 
        <div>
        <Banner bannerGame = {allGameList[0]}/> <TrendingGames trendingGame={allGameList}/>
        <GamesByGenresId gameList={gameListByGenres}/>
        </div>
         :null
          }

          
          
        </div>
    </div>
    </>
    
  )
}

export default Home