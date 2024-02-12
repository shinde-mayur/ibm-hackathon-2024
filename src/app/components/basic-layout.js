'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, UserGroupIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment } from 'react'

import Navigation from './navigation'
const classNames = (...classes) => classes.filter(Boolean).join(' ')
// import cookieCutter from 'cookie-cutter'


export default function BasicLayout({ children, title, description, className }) {
    const router = useRouter()

    const navigation = [
        { name: 'View Nearby', href: '/', },
        { name: 'Communities', href: '/community', },
        { name: 'About', href: '/about', },
    ]
    const userNavigation = [
        { name: 'Your Profile', href: '/profile' },
        {
            name: 'Sign out', onClick: () => {
                var cookie = require("@boiseitguru/cookie-cutter");
                cookie.set('token', '', { expires: new Date(0) })
                router.push('/login')
            }
        },
    ]
    const pathname = usePathname();
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <UserGroupIcon
                                            className="h-8 w-8 text-white"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            <Navigation navigation={navigation}
                                                pathname={pathname}
                                                activeClasses={(active) => classNames(active
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium')
                                                } />
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <UserIcon className="h-6 w-6 text-gray-400" />
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
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Navigation navigation={userNavigation}
                                                        pathname={pathname}
                                                        as={Menu.Item}
                                                        activeClasses={(active) => classNames(active
                                                            ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700')}
                                                    />
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 ">
                                <Navigation navigation={navigation}
                                    pathname={pathname}
                                    as={Disclosure.Button}
                                    activeClasses={(active) => classNames(active
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium ')} />
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <UserIcon className="h-6 w-6 text-gray-400" />
                                    </div>

                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <Navigation navigation={userNavigation}
                                        pathname={pathname}
                                        as={Disclosure.Button}
                                        activeClasses={(active) => classNames(active
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium')} />
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {title &&
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
                        {description && <p className="text-sm text-muted-foreground">{description}</p>}
                    </div>
                </header>
            }
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    )
}