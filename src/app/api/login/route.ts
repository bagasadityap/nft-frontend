import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const wallet = body.walletAddress

  if (!wallet) {
    return NextResponse.json({ error: 'Wallet required' }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })

  response.cookies.set({
    name: 'token',
    value: wallet,
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
