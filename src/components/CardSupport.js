import React from 'react'

const CardSupport = ({bgColor, spacing}) => {

    const cardsInfo = [
        {
            smallTitle: 'Small title 1',
            title: 'Support i can bring to your is priceless',
            content: 'Here are the biggest enterprise acquisitions of 2019 so far, in reverse chronological order',
            image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            btn: 'En savoir plus'
        },
        {
            smallTitle: 'Small title 2',
            title: 'Support i can bring to your is usefull for your',
            content: 'Here are the biggest enterprise acquisitions of 2020 so far, in reverse chronological order',
            image: 'https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80',
            btn: 'En savoir plus'
        },
        {
            smallTitle: 'Small title 3',
            title: 'Support i can bring to your is legendary',
            content: 'Here are the biggest enterprise acquisitions of 2021 so far, in reverse chronological order',
            image: 'https://images.unsplash.com/photo-1546427660-eb346c344ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            btn: 'En savoir plus'
        },
    ]

    return (
        <div className={`${bgColor} ${spacing}`}>
            <div className="block md:flex my-5">
                {cardsInfo.map(card => (
                    <div className=" bg-white border border-gray-600">
                        <div className="p-5">
                            <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{card.smallTitle}</h4>

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{card.title}</h5>

                            <p className="mb-1 font-normal text-gray-700">{card.content}</p>
                        </div>
                        <div className="px-5 h-80">
                            <img className="w-full h-full object-cover object-center" src={card.image} alt="" />
                        </div>
                        <div className="p-5">
                            <a href="/home" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                {card.btn}
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardSupport