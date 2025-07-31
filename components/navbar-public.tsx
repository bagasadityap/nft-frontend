'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import React, {useCallback} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: 'ABOUT', href: '#about' },
  { name: 'GENERATOR', href: '/meme-generator' },
  { name: '$PHASER COIN', href: '/$phaser-coin' },
  { name: 'COLLECTIONS', href: '/collections' },
  { name: 'FAQ', href: '/faq' },
]

const navigationMobile = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '#about' },
  { name: 'GENERATOR', href: '/meme-generator' },
  { name: '$PHASER COIN', href: '/$phaser-coin' },
  { name: 'COLLECTIONS', href: '/collections' },
  { name: 'FAQ', href: '/faq' },
]

export default function Navbar({ className = "" }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      if (pathname === '/') {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  }, [pathname, router]);

  return (
    <Disclosure as="nav" className={`sm:py-2 lg:py-5 ${className}`}>
      {({ open }) => (
        <>
          <div className="font-gloria mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-start pt-24">
                <Disclosure.Button
                  className="absolute top-6 right-6 text-gray-300"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-8 w-8" />
                </Disclosure.Button>

                <div className="w-full max-w-xs mx-auto space-y-4">
                  {navigationMobile.map((item) => {
                    const isAnchorLink = item.href.startsWith('#');
                    const isActive = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '');
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          const disclosureBtn = document.querySelector('[aria-label="Close menu"]') as HTMLElement;
                          disclosureBtn?.click();
                        }}
                        className={`block rounded-md px-6 py-4 text-xl font-bold text-center ${
                          isActive && !isAnchorLink ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </Disclosure.Panel>

              <div className="flex flex-1 items-center justify-between sm:items-stretch">
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
                  <div className="flex items-center">
                    {navigation.map((item) => {
                      const isActive = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '');
                      const isAnchorLink = item.href.startsWith('#');

                      return isAnchorLink ? (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`block rounded-md px-3 py-4 font-bold text-center ${
                            isActive
                              ? "text-white"
                              : "text-gray-300 hover:text-white sm:text-sm md:text-md lg:text-xl"
                          }`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block rounded-md px-6 py-4 font-bold text-center ${
                            isActive
                              ? "text-white"
                              : "text-gray-300 hover:text-white sm:text-sm md:text-md lg:text-xl"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                    href="https://x.com/phaserbeary_xrp?s=21"
                    className="rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                    <span className="sr-only">X</span>
                    <FaXTwitter className="h-9 w-9" aria-hidden="true" />
                </a>
                <a
                  href="https://discord.gg/2GqcCEFPNu"
                  className="ml-2 rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                  <span className="sr-only">Join Discord</span>
                  <FaDiscord className="h-10 w-10" />
                </a>
                <a
                  href="https://discord.gg/2GqcCEFPNu"
                  className="ml-2 rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                  <span className="sr-only">Join Telegram</span>
                  <FaTelegramPlane className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}