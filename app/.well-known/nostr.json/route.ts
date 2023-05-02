import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // return json response
  return NextResponse.json({
    names:
      { 'lydia': '497e2ad9609d900f7b2fab27b27ba478b7a4a578809f52288fd47c5e431a7e3f' }
  })
}
