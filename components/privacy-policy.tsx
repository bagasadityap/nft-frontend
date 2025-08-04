'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PrivacyPolicy() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="link"
        className="text-sm underline text-blue-600 hover:text-blue-800"
        onClick={() => setOpen(true)}
      >
        Privacy Policy
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-6">
          <ScrollArea className="h-[70vh]">
            <DialogTitle className="text-2xl font-bold mb-4">🛡️ Privacy Policy</DialogTitle>

            <p><strong>Effective Date:</strong> August 4, 2025</p>
            <p><strong>Last Updated:</strong> August 4, 2025</p>
            <br />

            <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information
              when you use our website and services.
            </p>
            <p>
              By using our services, you agree to the terms of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">2. Information We Collect</h2>
            <ul className="list-disc ml-5">
              <li><strong>Wallet Address</strong>: Collected only after you give consent.</li>
              <li><strong>Cookies</strong>: Used to store your wallet address for login session purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">3. Use of Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc ml-5">
              <li>Remember your login session (wallet address).</li>
              <li>Improve user experience.</li>
            </ul>
            <p>
              Cookies are only set after your explicit consent. You may withdraw your consent at any time.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">4. Legal Basis</h2>
            <p>
              We rely on <strong>consent</strong> as the legal basis for processing your wallet address and
              setting cookies, as required under the <strong>General Data Protection Regulation (GDPR)</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">5. Data Sharing</h2>
            <p>
              We <strong>do not</strong> sell or share your data with third parties. Your wallet address is
              only used within our service for authentication.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">6. Data Retention</h2>
            <p>
              Your wallet address stored in cookies is kept for up to <strong>7 days</strong>, unless you
              manually delete it or withdraw your consent.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-5">
              <li>Withdraw consent at any time</li>
              <li>Request deletion of your data</li>
              <li>Access information about how your data is used</li>
            </ul>
            <p>
              Please contact us if you&apos;d like to exercise any of these rights.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. We encourage you to review this page regularly for updates.
            </p>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
