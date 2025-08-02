'use client'

import Link from "next/link"
import { useState } from "react"

export default function LoginWithXaman() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)

    window.location.href = "/api/xumm-login" 
  }

  return (
    <div className="min-h-screen bg-[#C4FF74] flex items-center justify-center px-4">
      <div className="max-w-xl w-full flex flex-col items-center gap-10 text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-black font-gloria">
          Only for the Laziest Bear
        </h1>

        <p className="text-2xl text-black font-gloria">
          Connect your Wallet
        </p>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="bg-black hover:bg-green-700 text-white text-xl py-3 px-6 rounded-2xl transition-all duration-200 shadow-lg"
        >
          {isLoading ? "Preparing..." : "Login with Xaman"}
        </button>
        <Link href="/" className="font-gloria underline font-semibold text-black hover:text-gray-800 text-xl hover:scale-105 py-3 px-6 rounded-lg transition">
          {'<'} Back
        </Link>
      </div>
    </div>
  )
}

{/* <div className="font-gloria flex flex-col items-center justify-center gap-20 py-20">
    <h1 className="text-black text-5xl md:text-9xl text-center">Not now. Beary’s still chasing honey in his sleep.</h1>
    <Link href="/" className="font-andika text-white bg-green-600 p-3 text-xl font-bold hover:bg-green-700 rounded-lg">
        Ok. I'll waitt..
    </Link>
</div> */}