import React from 'react'

const Footer = () => {
  return (
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
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-custom-orange block w-full p-2.5 " placeholder="John" required="" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-custom-orange block w-full p-2.5" placeholder="Doe" required="" />
                  </div>
                  {/* <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-custom-orange block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                  </div> */}
                </div>
                <div className="px-5 pb-5">
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-custom-orange block w-full p-2.5" placeholder="john.doe@company.com" required="" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large input</label>
                    <input type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:outline-none focus:ring-2 focus:ring-custom-orange focus:border-custom-orange" />
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Footer