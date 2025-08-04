'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PrivacyPolicy({size = "", color = "", hover = ""}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="link"
        className={`inline p-0 m-0 ${size} ${color} hover:${hover}`}
        onClick={() => setOpen(true)}
      >
        Privacy Policy
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-6">
          <ScrollArea className="h-[70vh]">
            <DialogTitle className="text-2xl font-bold mb-4">🛡️ Privacy Policy</DialogTitle>

            <p><strong>Effective Date:</strong> August 5, 2025</p>
            <p><strong>Last Updated:</strong> August 5, 2025</p>
            <br />

            <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your information when you use our services.
              By continuing to use our website, you acknowledge and agree to the terms described in this policy.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">2. What We Collect</h2>
            <ul className="list-disc ml-5">
              <li><strong>Wallet Address</strong>: Only stored after your explicit consent.</li>
              <li><strong>Cookies</strong>: Used for login session and user experience purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">3. Cookie Usage</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc ml-5">
              <li>Store your wallet session securely.</li>
              <li>Enhance overall user interaction with the website.</li>
            </ul>
            <p>
              Cookies are only activated after your approval. You can withdraw your consent at any time through the settings.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">4. Legal Basis</h2>
            <p>
              We process your data based on <strong>consent</strong> in accordance with the <strong>GDPR</strong>.
              You must give us permission before we store your wallet address or use cookies.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">5. Data Sharing</h2>
            <p>
              We do <strong>not</strong> sell or share your wallet address with any third-party services.
              It is only used within our application to support login and functionality.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">6. Data Retention</h2>
            <p>
              Wallet data stored in cookies will automatically expire within <strong>7 days</strong>.
              You may clear it earlier by withdrawing your consent or clearing your browser cookies manually.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">7. Your Rights</h2>
            <p>As a user, you have the right to:</p>
            <ul className="list-disc ml-5">
              <li>Withdraw your cookie consent at any time</li>
              <li>Request deletion of your wallet session</li>
              <li>Request transparency about how your data is handled</li>
            </ul>
            <p>
              You can contact us if you would like to exercise any of these rights.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">8. Updates to the Policy</h2>
            <p>
              This policy may be updated from time to time. We recommend checking this page periodically
              to stay informed of any changes.
            </p>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
