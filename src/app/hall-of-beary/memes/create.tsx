'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaUpload } from "react-icons/fa6"

export default function UploadMeme() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        className="text-xl md:text-2xl text-white bg-black my-3 hover:bg-gray-800 p-7 rounded-lg"
        onClick={() => setOpen(true)}
      >
        Upload Meme
        <FaUpload/>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-sm md:w-xl p-6">
            <DialogTitle className="text-2xl font-bold mb-4">Upload Meme</DialogTitle>
            <div>
                <form action="http://api.phaserxrp.xyz/api/memes/create" method="post" encType="multipart/form-data">
                    <label className="block text-xs md:text-sm font-medium m-0 p-0 text-red-500 mb-2">*PNG, JPG, JPEG, WEBP (MAX. 1MB).</label>
                    <input type="file" className="w-75 md:w-full border border-black p-2 rounded-lg bg-black/20 hover:bg-black/30" name="image" id="image" required/>
                    <button type="submit" className="text-white bg-black hover:bg-gray-800 p-2 mt-3 rounded-lg">Submit</button>
                </form>
            </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
