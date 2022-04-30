import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, SearchIcon } from "@heroicons/react/solid"
import { NavLink } from 'react-router-dom'
import CustomInput from '../Components/CustomInput'
import { useForm } from '../Services/hooks/useForm.js'
import Logo from '../Assets/Images/PicosPardos.png'
import { Fragment } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const navigation = [
    { name: 'Catalogo', href: '#', current: true },
    { name: 'Carrito', href: '#', current: false },
    { name: 'Contactos', href: '#', current: false },
    { name: 'Pedidos', href: '#', current: false }
]
const menu = [
    { name: 'Profile', href: '#', current: false },
    { name: 'Settings', href: '#', current: false },
    { name: 'Log out', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const { token } = useSelector(state => state.auth)

    const [values, handleInputChange, reset] = useForm({});

    const [navigationState, setNavigation] = useState(navigation);
    const [menuState, setMenu] = useState(menu)

    const handleChange = (e) => {
    }

    const handleClick = (e) => {

    }

    return (
        <Disclosure as="nav" className='bg-gray-800'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-1 px-2 w-full sm:px-6  lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className="absolute inset-y-0 left-0 flex items-center justify-start sm:hidden">
                                <Disclosure.Button className=' inline-flex items-center justify-start p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:inline-none'>
                                    <span className='sr-only'>Toggle navigation</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img src={Logo} alt="" className="block h-8 w-auto" />
                                </div>
                                <div className="hidden sm:block sm:ml-6 sm:items-stretch">
                                    <div className="flex space-x-4 items-center">
                                        {navigationState.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-white navbar-current' : 'text-gray-300 hover:bg-gray-700 hover:text-white navbar-link-hover',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <div className="hidden justify-center md:flex">
                                            <div className="input-group relative flex flex-wrap items-stretch w-full ml-6">
                                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                                <SearchIcon className="absolute right-0 top-0 mt-3 mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {token ? (
                                <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={Logo}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {menuState.map(item => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            ) : (
                                <div className='inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                    <div class="flex space-x-2 justify-center">
                                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Register</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar