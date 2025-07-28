'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Meme Generator', href: '/meme-generator' },
  { name: 'Collection', href: '#' },
  { name: 'FAQ', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-black/30 sm:py-2 lg:py-5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  {/* Modal-like mobile menu */}
                  {open && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-start pt-24">
                      {/* Exit button */}
                      <button
                        onClick={() => document.activeElement && (document.activeElement as HTMLElement).blur()}
                        className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none"
                        aria-label="Close menu"
                      >
                        <XMarkIcon className="h-8 w-8" />
                      </button>
                      <div className="w-full max-w-xs mx-auto space-y-4">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block rounded-md px-6 py-4 text-xl font-bold text-center ${
                                  isActive
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                        })}
                      </div>
                    </div>
                  )}
                </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-betwee">
              <div className="hidden sm:flex flex-shrink-0 items-center">
                <Link href="/" className="block">
                <Image
                  src="/assets/beary/IMG_5254.GIF"
                  alt="This is Beary"
                  width={240}
                  height={320}
                  className="w-24 h-auto sm:w-32 md:w-40 lg:w-52 max-w-full"
                />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center">
                <div className="flex space-x-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-md px-6 py-4 font-bold text-center ${
                          isActive
                            ? "text-white text-2xl"
                            : "text-gray-300 hover:text-white text-xl"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                })}
                </div>
              </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                <span className="sr-only">X</span>
                <FaXTwitter className="h-9 w-9" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="ml-3 rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                <span className="sr-only">Join Discord</span>
                <FaDiscord className="h-10 w-10" />
              </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-md ${
                      isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}