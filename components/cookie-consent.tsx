'use client'

import PrivacyPolicy from './privacy-policy'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie-consent')
    if (!consentGiven) {
      setShowConsent(true)
    }
  }, [])

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white/70 p-4 rounded shadow-lg flex flex-col md:items-center justify-between gap-3 max-w-xl mx-auto border border-gray-300 rounded-lg">
      <p className="text-sm text-gray-800">
        We use cookies to store your wallet login data. By continuing, you agree to our use of cookies.
      </p>
      <div>
        <button
          onClick={() => {
            localStorage.setItem('cookie-consent', 'true')
            setShowConsent(false)
          }}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
        >
          Agree
        </button>
        <PrivacyPolicy/>
      </div>
    </div>
  )
}
