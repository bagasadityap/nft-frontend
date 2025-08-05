'use client'

import PrivacyPolicy from './privacy-policy'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [consent, setConsent] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    setConsent(stored)
    const isOnOwnerLogin = window.location.pathname === '/owner-login/'
    if (stored !== null || !isOnOwnerLogin) {
      setIsVisible(false)
    }

    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "_ga_699NE13B0K=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }, [])

  useEffect(() => {
    const showConsent = () => {
      setIsVisible(true)
    }

    window.addEventListener('show-cookie-consent', showConsent)

    return () => {
      window.removeEventListener('show-cookie-consent', showConsent)
    }
  }, [])

  const handleConsent = (value: 'accepted') => {
    localStorage.setItem('cookie-consent', value)
    setConsent(value)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed font-sora bottom-4 left-4 right-4 z-50 bg-white/90 p-4 rounded shadow-lg flex flex-col md:items-center justify-between gap-3 max-w-xl mx-auto border border-gray-300">
      <button
        onClick={() => {
          setIsVisible(false)
        }}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        aria-label="Close"
      >
        ×
      </button>

      <p className="text-sm text-center text-gray-800">
        We use cookies to remember your wallet login. No tracking, no ads. <br />
        See our <PrivacyPolicy className="inline p-0 m-0 text-sm text-blue-600 hover:text-blue-800"/> for more details.
        <br />[Accept and Continue]
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => handleConsent('accepted')}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
