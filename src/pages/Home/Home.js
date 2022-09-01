import React from 'react'
import Navbars from '../../common/Navigation/Navbars';
import YouTube from 'react-youtube';

const Home = () => {
  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      start: 5,
      controls: 0,
      iv_load_policy: 3,
      rel: 0,
    },
  };
  return (
    <div className="home">
      <Navbars />
      <div className="bg-black">
        <div className="container m-auto ">
          <div className="w-full relative h-[300px] sm:h-full ">
            <div className="hidden sm:block brightness-50">
              <YouTube videoId="QJhNFUBx0qc" opts={opts} />
            </div>
            <div className="absolute bottom-12 w-full">
              <h1 className="ml-4 sm:ml-12 lg:ml-44 xl:ml-60 2xl:ml-80 text-gray-100 text-8xl font-bold">ROMAN</h1>
              <h1 className="mr-4 sm:mr-12 lg:mr-44 xl:mr-60 2xl:mr-80 text-right text-gray-100 text-8xl font-bold">UZAL</h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home