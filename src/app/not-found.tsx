'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div
        className="min-h-screen h-100vh bg-black text-gray-800 flex flex-col items-center justify-center p-6 text-center"
        style={
            {
                backgroundImage: `url('/assets/beary/IMG_5244.PNG')`,
                backgroundSize: "cover",
                backgroundPosition: "center top 20%",
            }
        }
    >
        <div className="bg-black/80 p-20 rounded-lg shadow-lg text-white">
            <h1 className="text-9xl text-red-500 font-bold mb-4">404</h1>
            <p className="text-5xl font-bold mb-5">
                OOOPS! <br />
                PAGE NOT FOUND
            </p>
            <p className="text-2xl mb-20">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/" className="text-white bg-green-600 p-3 text-xl font-bold hover:bg-green-700 rounded-lg">
                Back to Home
            </Link>
        </div>
    </div>
  )
}
