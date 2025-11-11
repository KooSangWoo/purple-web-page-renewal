import { NextResponse } from 'next/server'

/**
 * GET /api/v1/health/ping
 */
export async function GET() {
  return NextResponse.json({ message: 'OK' })
}
