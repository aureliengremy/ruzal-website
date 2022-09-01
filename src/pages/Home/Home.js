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


  const cardImgUrl = {
    card1: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    card2: 'https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80',
    card3: 'https://images.unsplash.com/photo-1546427660-eb346c344ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }

  return (
    <div className="home">
      <Navbars />
      {/* HERO VIDEO  */}
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
      {/* CARD  */}
      <div className="container m-auto">
        <div className="block md:flex my-5">
          {/* CARD-1  */}
          <div className=" bg-white border border-gray-600 dark:bg-gray-800 dark:border-gray-200">
            <div className="p-5">
              <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Small title</h4>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card1} alt="" />
            </div>
            <div className="p-5">
              <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          {/* CARD-2  */}
          <div className=" bg-white border border-gray-600 dark:bg-gray-800 dark:border-gray-200">
            <div className="p-5">
              <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Small title</h4>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card2} alt="" />
            </div>
            <div className="p-5">
              <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          {/* CARD-3  */}
          <div className=" bg-white border border-gray-600 dark:bg-gray-800 dark:border-gray-200">
            <div className="p-5">
              <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Small title</h4>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card3} alt="" />
            </div>
            <div className="p-5">
              <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* GALLERY */}
      <div className="bg-black">

        <div className="container m-auto ">
          <p className="text-gray-200">Gallery</p>
        </div>
      </div>
      {/* REVIEW */}
      <div className="container m-auto h-auto">
        <div className="overflow-x-auto overflow-y-hidden relative border border-gray-300 ">
          <div className=" w-[1536px] flex row ">
          <div class="flex w-96 border border-gray-200 shadow-sm dark:border-gray-700 ">
          <figure class="w-full flex justify-center items-center p-4 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex w-1/4 justify-center items-center space-x-3">
              <img class="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            </figcaption>
            <div className="flew-col w-3/4">
              <blockquote class="text-left italic ml-4 max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <div class="space-y-0.5 font-medium dark:text-white text-right">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Bonnie Green</div>
              </div>
            </div>
          </figure>
        </div>
        <div class="flex w-96 border border-gray-200 shadow-sm dark:border-gray-700 ">
          <figure class="w-full flex justify-center items-center p-4 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex w-1/4 justify-center items-center space-x-3">
              <img class="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            </figcaption>
            <div className="flew-col w-3/4">
              <blockquote class="text-left italic ml-4 max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <div class="space-y-0.5 font-medium dark:text-white text-right">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Bonnie Green</div>
              </div>
            </div>
          </figure>
        </div>
        <div class="flex w-96 border border-gray-200 shadow-sm dark:border-gray-700 ">
          <figure class="w-full flex justify-center items-center p-4 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex w-1/4 justify-center items-center space-x-3">
              <img class="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            </figcaption>
            <div className="flew-col w-3/4">
              <blockquote class="text-left italic ml-4 max-w-2xl text-gray-500 dark:text-gray-400">
                <p class="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <div class="space-y-0.5 font-medium dark:text-white text-right">
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Bonnie Green</div>
              </div>
            </div>
          </figure>
        </div>
            
          </div>

        </div>
      </div>
      

    </div>
  )
}

export default Home