import React from 'react'
import Footer from '../../common/Footer/Footer';
import Navbars from '../../common/Navigation/Navbars';

const Realization = () => {

  const urlYoutube = [
    {
      title: '- Urubu is Dead - by MOLZK',
      url: 'https://www.youtube.com/embed/LC37a3TFDtc'
    },
    {
      title: '- The middle of the world  - by Nuraoma',
      url: 'https://www.youtube.com/embed/VZtNSfd3gs0'
    },
    {
      title: '- Awake - by Romain Briolet',
      url: 'https://www.youtube.com/embed/kx_IULft_JE'
    },
    {
      title: '- Dance Another Day - by Romain Briolet',
      url: 'https://www.youtube.com/embed/7kfpgSah72I'
    },
    // {
    //   title: '- Right There - by Romain Briolet',
    //   url: 'https://www.youtube.com/embed/gOkHckK5Uho'
    // },
    // {
    //   title: '- Tropkillaz - HIDEHO - by Nuraoma',
    //   url: 'https://www.youtube.com/embed/Z9hvoZgQtLs'
    // },
    // {
    //   title: '- REALITY - by Romain Briolet',
    //   url: 'https://www.youtube.com/embed/js6cWyhBncQ'
    // },

  ]


  return (
    <div id="realization">
      <Navbars />
      <div className="bg-custom-gray">
        <div className="container m-auto">
          <div className="py-12 relative">
            {urlYoutube.map(item => {
              return (
                <div className="py-8">
                  <div
                    className="embed-responsive embed-responsive-21by9 relative w-5/6 m-auto overflow-hidden transition duration-500 brightness-50 hover:brightness-100"
                    style={{ paddingTop: "35.857143%" }}
                  >
                    <iframe
                      title={item.title}
                      className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      src={item.url}
                      allowfullscreen=""
                      data-gtm-yt-inspected-2340190_699="true"
                      id="240632615"
                    ></iframe>
                  </div>
                  <h3 className="absolute -mt-16 ml-5 text-zinc-50 text-sm lg:text-lg font-semibold bg-custom-gray p-3">{item.title}</h3>
                </div>
              )
            })}

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Realization