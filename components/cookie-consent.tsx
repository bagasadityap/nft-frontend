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
  }, [])

  useEffect(() => {
    const showConsent = () => {
      setConsent(null)
      setIsVisible(true)
    }

    window.addEventListener('show-cookie-consent', showConsent)

    return () => {
      window.removeEventListener('show-cookie-consent', showConsent)
    }
  }, [])

  const handleConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', value)
    setConsent(value)
    setIsVisible(false)
  }

  const withdrawConsent = () => {
    localStorage.removeItem('cookie-consent')
    setConsent(null)
    window.location.reload()
  }

  if (typeof window !== 'undefined') {
    (window as typeof window & { withdrawConsent?: () => void }).withdrawConsent = withdrawConsent
  }

  if (!isVisible) return null

  return (
    <div className="fixed font-sora bottom-4 left-4 right-4 z-50 bg-white/90 p-4 rounded shadow-lg flex flex-col md:items-center justify-between gap-3 max-w-xl mx-auto border border-gray-300">
      <button
        onClick={() => {
          if (typeof window !== "undefined") {
            const consent = localStorage.getItem("cookie-consent")
            if (consent === null) {
              localStorage.setItem("cookie-consent", "false")
            }
          }
          setIsVisible(false)
        }}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        aria-label="Close"
      >
        ×
      </button>

      <p className="text-sm text-gray-800">
        We use cookies to store your wallet login session only. You can change this preference anytime.
        See our <PrivacyPolicy size="text-sm" color="text-blue-600" hover="text-blue-800"/> for more details.
      </p>

      {localStorage.getItem("cookie-consent") === null ? (
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent('accepted')}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent('rejected')}
            className="bg-gray-400 hover:bg-gray-500 text-white text-sm px-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={withdrawConsent}
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded"
          >
            Withdraw Consent
          </button>
        </div>
      )}
    </div>
  )
}
