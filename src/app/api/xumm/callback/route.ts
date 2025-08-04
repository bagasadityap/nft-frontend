import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const uuid = searchParams.get('uuid')
  const res = await axios.get(`http://api.phaserxrp.xyz/api/xumm/callback?uuid=${uuid}`)
  return NextResponse.json(res.data)
}
