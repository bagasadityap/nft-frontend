import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
  ;(await cookieStore).set('token', '', {
    path: '/',
    expires: new Date(0),
  })

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}