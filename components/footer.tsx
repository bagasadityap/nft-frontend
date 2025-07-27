import { FaXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-white py-6">
        <hr className="mb-5"/>
        <div className="mx-auto max-w-8xl px-8 sm:px-10 lg:px-12">
            <div className="flex justify-between items-center">
            <p className="text-md">
                &copy; {new Date().getFullYear()} Monkeyz. All rights reserved.
            </p>
            <div className="space-x-4">
                <button
                    type="button"
                    className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none">
                    <span className="sr-only">X</span>
                    <FaXTwitter className="h-9 w-9" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="ml-3 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none">
                    <span className="sr-only">Join Discord</span>
                    <FaDiscord className="h-10 w-10" />
                </button>
            </div>
            </div>
        </div>
    </footer>
  );
}