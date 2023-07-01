/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCookies } from 'react-cookie';
import { logout } from '../../logic/user';
import { useRouter } from 'next/router';
import { client } from '../../utils/graphql';
import SideBar from "./flowbite/side-bar";

const navigation = [

  // { name: 'About', href: '#about' },
  // { name: 'Experience', href: '#experience' },
  // { name: 'Work', href: '#work' },
]

export default function PortalNavbar(props) {
  const buttonRef = useRef();
  const handleLogout = async () => {
    await logout("http://localhost:7080/rest.api/logout", {});
    await client.refetchQueries({
      include: ["getCurrentUser"],
    });
  }
  return (
    <Popover>
    <div className="py-4 px-4 sm:px-6 lg:px-8 bg-secondary">
      <nav className="flex items-center justify-between sm:h-10 " aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                alt="Workflow"
                className="h-8 w-auto sm:h-10"
                src="/static/img/programmer.png"
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 z-0">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-gray-400 hover:text-white">
              {item.name}
            </a>
          ))}
          <button onClick={handleLogout} className="font-medium text-primary hover:text-primary-hover">
            Logout
          </button>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-secondary ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                alt="Workflow"
                className="h-8 w-auto sm:h-10"
                src="/static/img/programmer.png"
              />
            </div>
            <div className="-mr-2">
              <Popover.Button  ref={buttonRef} className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-white hover:text-seconday hover:bg-seconday focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close main menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={()=>buttonRef.current?.click()}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-primary"
              >
                {item.name}
              </a>
            ))}
            <a
            onClick={handleLogout}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-gray-900 hover:bg-gray-50"
            >
            Logout
          </a>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>)
}
