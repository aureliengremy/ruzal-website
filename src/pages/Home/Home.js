import React from 'react'
import Navbars from '../../common/Navigation/Navbars';
import Footer from '../../common/Footer/Footer';
import HeroVideo from '../../components/HeroVideo';
import CardSupport from '../../components/CardSupport';

const Home = () => {

  return (
    <div id="home">
      <Navbars />
      <HeroVideo />
      {/* CARD  */}
      <CardSupport/>
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
          <div className="w-[1536px] h-36 2xl:w-[1836px] flex row ">
            {/* REVIEW LIGHT */}
            <div className="flex w-auto border border-gray-200 shadow-sm ">
              <figure className="w-96 flex justify-center items-center p-4 text-center bg-white border-b border-gray-200">
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
            <div className="flex w-auto border shadow-sm border-gray-700 ">
              <figure className="w-96 flex justify-center items-center p-4 text-center  bg-gray-800 border-gray-700">
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
            <div className="flex w-auto border border-gray-200 shadow-sm  ">
              <figure className="w-96 flex justify-center items-center p-4 text-center bg-white border-b border-gray-200">
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
            <div className="flex w-auto border shadow-sm border-gray-700 ">
              <figure className="w-96 flex justify-center items-center p-4 text-center  bg-gray-800 border-gray-700">
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
            <div className="flex w-auto border border-gray-200 shadow-sm  ">
              <figure className="w-96 flex justify-center items-center p-4 text-center bg-white border-b border-gray-200">
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
            <div className="flex w-auto border shadow-sm border-gray-700 ">
              <figure className="w-96 flex justify-center items-center p-4 text-center  bg-gray-800 border-gray-700">
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
      <Footer />

    </div >
  )
}

export default Home