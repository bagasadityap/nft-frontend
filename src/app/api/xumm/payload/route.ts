import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST() {
  const res = await axios.post('http://api.phaserxrp.xyz/api/xumm/payload');
  return NextResponse.json(res.data);
}


