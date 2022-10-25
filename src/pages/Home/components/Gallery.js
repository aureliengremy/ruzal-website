import React from 'react'

const Gallery = ({spacing}) => {

    // random assign class shadow number to every image


  return (
    <div className={`bg-custom-gray ${spacing}`}>
        <div className="container-full m-auto py-5">
            {/* MOBILE */}
          <div className="lg:hidden">
            <div className="p-5 h-full">
              <img alt="gallery" className="block object-cover object-center w-full h-32"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              <p className="text-slate-300 text-center m-2">realisation 1</p>
            </div>
            <div className="p-5 h-full">
              <img alt="gallery" className="block object-cover object-center w-full h-44"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              <p className="text-slate-300 text-center m-2">realisation 2</p>
            </div>
            <div className="text-center text-slate-300">
              <a href="/realization">Voir tout</a>
            </div>
          </div>
            {/* LARGE */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-evenly items-center py-5">
              <div className="real-1 w-1/4">
                <img alt="gallery" className="block object-cover object-center w-3/4 h-32 m-auto gallery-item"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                <p className="text-slate-300 text-center m-1">realisation 1</p>
              </div>
              <div className="real-2 w-2/4">
                <img alt="gallery" className="block object-cover object-center w-full h-64 m-auto"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" />
                <p className="text-slate-300 text-center m-1">realisation 2</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly items-center py-5">
              <div className="real-3 w-1/3 -mt-6">
                <img alt="gallery" className="block object-cover object-center w-3/4 h-44 m-auto"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                <p className="text-slate-300 text-center m-1">realisation 3</p>
              </div>
              <div className="real-4 w-1/5">
                <img alt="gallery" className="block object-cover object-center w-full h-34 m-auto"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                <p className="text-slate-300 text-center m-1">realisation 4</p>
              </div>
              <div className="real-5 w-1/3 -mb-6">
                <img alt="gallery" className="block object-cover object-center w-full h-52 m-auto"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                <p className="text-slate-300 text-center m-1">realisation 5</p>
              </div>
            </div>

            <div className="text-center text-slate-300 p-5">
              <a href="/realization">Voir tout</a>
            </div>

          </div>
        </div>

      </div>
  )
}

export default Gallery