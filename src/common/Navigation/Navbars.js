/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'Acceuil', href: '/home' },
    { name: 'Realisation', href: '/realization' },
    // { name: 'Accompagnement', href: '/support' },
    { name: 'A propos', href: '/about' },
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Navbars = () => {

    const [burger, setBurger] = useState(false)

    const burgerIsLoading = () => {
        setBurger(current => !current);
    }

    return (
        <header>
            <nav className="bg-custom-gray">
                {/* max-w-7xl sm:px-6 lg:px-8 */}
                <div className="mx-auto px-2 container">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <div onClick={burgerIsLoading} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {burger ?
                                    <div className="block h-6 w-6 text-center" aria-hidden="true">X</div>
                                    :
                                    <div className="block h-6 w-6 text-center" aria-hidden="true">|||</div>
                                }
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                {/* <img
                        className="block h-8 w-auto"
                        src=""
                        alt=""
                    /> */}
                                <p className="text-gray-400">RUzal</p>
                            </div>
                            <div className="hidden sm:ml-auto sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={navInfo =>
                                                navInfo.isActive ?
                                                    classNames('bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium')
                                                    : classNames('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {burger ?
                    (<div className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={navInfo =>
                                        navInfo.isActive ?
                                            classNames('bg-custom-gray text-white block px-3 py-2 rounded-md text-base font-medium')
                                            : classNames('text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>)
                    :
                    ""
                }
            </nav>
        </header>
    )
}

export default Navbars