import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'

export default function Footer({color = ""}) {
  return (
    <footer>
        <div className="font-gloria w-full max-w-screen-xl mx-auto p-4">
            <div className="sm:flex sm:items-center justify-center md:justify-between">
                <a className="hidden md:block flex items-center sm:mb-0">
                    <Image 
                        width={32}
                        height={32}
                        src="/assets/beary/IMG_5247.PNG"
                        className="w-42 h-auto"
                        alt="Logo"
                    />
                </a>
                <ul className="flex items-center w-full justify-center md:justify-end gap-6 text-sm font-medium">
                    <li>
                        <a
                            href="https://x.com/phaserbeary_xrp?s=21"
                            className={`rounded-full ${color} hover:text-gray-500 focus:outline-none`}>
                            <span className="sr-only">X</span>
                            <FaXTwitter className="w-12 h-auto" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discord.gg/2GqcCEFPNu"
                            className={`rounded-full ${color} hover:text-gray-500 focus:outline-none`}>
                            <span className="sr-only">Join Discord</span>
                            <FaDiscord className="w-13 h-auto" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/+7GEUGZ-1C5s0MmE9"
                            className={`rounded-full ${color} hover:text-gray-500 focus:outline-none`}>
                            <span className="sr-only">Join Telegram</span>
                            <FaTelegramPlane className="w-13 h-auto" />
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <span className={`block text-sm md:text-md ${color} lg:text-lg sm:text-center`}>&copy; {new Date().getFullYear()} Made with 🐻🪙 by $Phaser Beary.</span>
        </div>
    </footer>
  );
}