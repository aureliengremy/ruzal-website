import React from 'react'
import Navbars from '../../common/Navigation/Navbars';
import Footer from '../../common/Footer/Footer';
import HeroVideo from './components/HeroVideo';
import CardSupport from './components/CardSupport';
import Gallery from './components/Gallery';

const Home = () => {

  return (
    <div id="home" className="grid">
      <Navbars />
      <HeroVideo />
      {/* CARD  */}
      <CardSupport bgColor="bg-gradient-to-t from-white to-black" 
                   spacing="p-28"  />
      {/* GALLERY */}
      {/* make a mobile component to show only one or two with a like to the page */}
      <Gallery spacing="p-28"/>
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