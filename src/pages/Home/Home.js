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
              <h1 className="ml-4 sm:ml-12 lg:ml-44 xl:ml-60 2xl:ml-80 text-zinc-50 text-8xl font-bold">ROMAN</h1>
              <h1 className="mr-4 sm:mr-12 lg:mr-44 xl:mr-60 2xl:mr-80 text-right text-zinc-50 text-8xl font-bold">UZAL</h1>
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

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card1} alt="" />
            </div>
            <div className="p-5">
              <a href="/home" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          {/* CARD-2  */}
          <div className=" bg-white border border-gray-600 dark:bg-gray-800 dark:border-gray-200">
            <div className="p-5">
              <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Small title</h4>

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card2} alt="" />
            </div>
            <div className="p-5">
              <a href="/home" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          {/* CARD-3  */}
          <div className=" bg-white border border-gray-600 dark:bg-gray-800 dark:border-gray-200">
            <div className="p-5">
              <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Small title</h4>

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="px-5 h-80">
              <img className="w-full h-full object-cover object-center" src={cardImgUrl.card3} alt="" />
            </div>
            <div className="p-5">
              <a href="/home" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* GALLERY */}
      {/* make a mobile component to show only one or two with a like to the page */}
      <div className="bg-custom-gray">
        <div className="container m-auto py-5">
          <div className="lg:hidden">
            <div className="p-5 h-full">
              <img alt="gallery" class="block object-cover object-center w-full h-32"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              <p className="text-slate-300 text-center m-2">realisation 1</p>
            </div>
            <div className="p-5 h-full">
              <img alt="gallery" class="block object-cover object-center w-full h-44"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              <p className="text-slate-300 text-center m-2">realisation 2</p>
            </div>
            <div className="text-center text-slate-300">
              <a href="/realization">Voir tout</a>
            </div>
          </div>
          <div className="hidden lg:block">
          <div className="flex flex-wrap justify-evenly items-center py-5">
            <div className="real-1 w-1/4">
              <img alt="gallery" class="block object-cover object-center w-3/4 h-32 m-auto"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              <p className="text-slate-300 text-center m-2">realisation 1</p>
            </div>
            <div className="real-2 w-2/4">
              <img alt="gallery" class="block object-cover object-center w-full h-64 m-auto"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" />
              <p className="text-slate-300 text-center m-2">realisation 2</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly items-center py-5">
            <div className="real-3 w-1/3 -mt-6">
              <img alt="gallery" class="block object-cover object-center w-3/4 h-44 m-auto"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              <p className="text-slate-300 text-center m-2">realisation 3</p>
            </div>
            <div className="real-4 w-1/5">
              <img alt="gallery" class="block object-cover object-center w-full h-34 m-auto"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              <p className="text-slate-300 text-center m-2">realisation 4</p>
            </div>
            <div className="real-5 w-1/3 -mb-6">
              <img alt="gallery" class="block object-cover object-center w-full h-52 m-auto"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              <p className="text-slate-300 text-center m-2">realisation 5</p>
            </div>
          </div>

          <div className="text-center text-slate-300 p-5">
            <a href="/realization">Voir tout</a>
          </div>

          </div>
        </div>

      </div>
      {/* REVIEW */}
      <div className="container m-auto h-auto">
        <div className="overflow-x-auto overflow-y-hidden relative  ">
          <div className=" w-[1536px] flex row ">
            {/* REVIEW LIGHT */}
            <div className="flex w-96 border border-gray-200 shadow-sm ">
              <figure className="w-full flex justify-center items-center p-4 text-center bg-white border-b border-gray-200">
                <figcaption className="flex w-1/4 justify-center items-center space-x-3">
                  <img className="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile 1" />
                </figcaption>
                <div className="flew-col w-3/4">
                  <blockquote className="text-left italic ml-4 max-w-2xl text-gray-500 dark:text-gray-400">
                    <p className="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
                  </blockquote>
                  <div className="space-y-0.5 font-medium  text-right">
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Bonnie Green</div>
                  </div>
                </div>
              </figure>
            </div>
            {/* REVIEW DARK */}
            <div className="flex w-96 border shadow-sm border-gray-700 ">
              <figure className="w-full flex justify-center items-center p-4 text-center  bg-gray-800 border-gray-700">
                <figcaption className="flex w-1/4 justify-center items-center space-x-3">
                  <img className="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile 2" />
                </figcaption>
                <div className="flew-col w-3/4">
                  <blockquote className="text-left italic ml-4 max-w-2xl text-gray-200">
                    <p className="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
                  </blockquote>
                  <div className="space-y-0.5 font-medium text-right">
                    <div className="text-sm font-light text-gray-200">Bonnie Green</div>
                  </div>
                </div>
              </figure>
            </div>
            {/* REVIEW LIGHT */}
            <div className="flex w-96 border border-gray-200 shadow-sm  ">
              <figure className="w-full flex justify-center items-center p-4 text-center bg-white border-b border-gray-200">
                <figcaption className="flex w-1/4 justify-center items-center space-x-3">
                  <img className="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile 3" />
                </figcaption>
                <div className="flew-col w-3/4">
                  <blockquote className="text-left italic ml-4 max-w-2xl text-gray-500 ">
                    <p className="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
                  </blockquote>
                  <div className="space-y-0.5 font-medium text-right">
                    <div className="text-sm font-light text-gray-500 ">Bonnie Green</div>
                  </div>
                </div>
              </figure>
            </div>
            {/* REVIEW DARK */}
            <div className="flex w-96 border shadow-sm border-gray-700 ">
              <figure className="w-full flex justify-center items-center p-4 text-center  bg-gray-800 border-gray-700">
                <figcaption className="flex w-1/4 justify-center items-center space-x-3">
                  <img className="w-auto h-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile 2" />
                </figcaption>
                <div className="flew-col w-3/4">
                  <blockquote className="text-left italic ml-4 max-w-2xl text-gray-200">
                    <p className="my-4 font-light">"If you care for your time, I hands down would go with this."</p>
                  </blockquote>
                  <div className="space-y-0.5 font-medium text-right">
                    <div className="text-sm font-light text-gray-200">Bonnie Green</div>
                  </div>
                </div>
              </figure>
            </div>

          </div>

        </div>
      </div>
      {/* FORM & FOOTER */}
      <div className="lg:bg-split-black-gray">
        <div className="container m-auto">
          <div className="lg:flex">
            <div className="h-96 lg:h-full lg:w-1/2 relative">
              <h3 className="absolute mt-44 ml-3 text-7xl text-zinc-50 font-bold">Viva la vida</h3>
              <img className="w-full h-full object-cover object-center contrast-200 grayscale opacity-25" src={require("../../assets/roman-detour-footer.png")} alt="" />
            </div>
            <div className="h-auto lg:w-1/2 my-auto">
              <form>
                <div className="grid gap-6 md:grid-cols-2 p-5">
                  <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="" />
                  </div>
                  {/* <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                  </div> */}
                </div>
                <div className="px-5 pb-5">
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large input</label>
                    <input type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default Home