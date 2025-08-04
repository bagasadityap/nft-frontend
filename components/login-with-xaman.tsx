import Link from "next/link"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import CookieConsent from './cookie-consent'

export default function LoginWithXaman() {
  const router = useRouter()
  const [qr, setQr] = useState('')
  const [uuid, setUuid] = useState('')
  const [status, setStatus] = useState('')
  const [wallet, setWallet] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const isMobile = () => {
    if (typeof window === 'undefined') return false
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  }

  const startLogin = async () => {
    setIsLoading(true)
    setStatus('Waiting for scan...')

    try {
      const res = await axios.post('/api/xumm/payload')
      setQr(res.data.qr)
      setUuid(res.data.uuid)

      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        localStorage.setItem('xumm-uuid', res.data.uuid)
      }

      if (isMobile() && res.data.next) {
        window.location.href = res.data.next
        return
      }

      setShowModal(true)
      poll(res.data.uuid)
    } catch (err) {
      setStatus('Failed to create payload')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const poll = (uuid: string) => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`/api/xumm/callback?uuid=${uuid}`)
        if (response.data.status === 'success') {
          clearInterval(interval)
          setStatus('Login successful!')
          setWallet(response.data.wallet_address)
          setShowModal(false)
          
          await axios.post('/api/login', {
            walletAddress: response.data.wallet_address,
          }, {
            withCredentials: true,
          })

          const consent = localStorage.getItem('cookie-consent')
          if (consent === 'accepted') {
            localStorage.setItem('wallet_address', response.data.wallet_address)
          } else {
            sessionStorage.setItem('wallet_address', response.data.wallet_address)
          }
          
          setTimeout(() => {
            router.push('/hall-of-beary/home')
          }, 1000)
        } else if (response.data.status === 'cancelled') {
          clearInterval(interval)
          setStatus('Login was cancelled.')
          setShowModal(false)
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            console.error('Server error:', err.response.data)
            setStatus(`Failed to fetch login status: ${err.response.data.message || 'Server error occurred'}`)
          } else if (err.request) {
            console.error('No response:', err.request)
            setStatus('Unable to connect to the server. Please check your network.')
          } else {
            console.error('Error:', err.message)
            setStatus(`An error occurred: ${err.message}`)
          }
        } else {
          console.error('Unexpected error:', err)
          setStatus('An unexpected error occurred.')
        }
      }
    }, 3000)
  }

  if (typeof window !== 'undefined' && isMobile()) {
    if (!isMobile()) return
    const storedUuid = localStorage.getItem('xumm-uuid')
    if (storedUuid) {
      poll(storedUuid)
      localStorage.removeItem('xumm-uuid')
    }
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
          onClick={startLogin}
          disabled={isLoading}
          className="text-2xl font-bold bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          {isLoading ? 'Generating QR...' : 'Login with XAMAN'}
        </button>

        <Link href="/" className="font-gloria underline font-semibold text-black hover:text-gray-800 text-xl hover:scale-105 py-3 px-6 rounded-lg transition">
          {'<'} Back
        </Link>

        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="flex flex-col items-center gap-4">
            <DialogTitle className="text-xl font-bold">Scan QR with XAMAN</DialogTitle>
            {qr && <img src={qr} alt="Scan QR" className="w-64" />}
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </DialogContent>
        </Dialog>
        <CookieConsent/>
      </div>
    </div>
  )
}
