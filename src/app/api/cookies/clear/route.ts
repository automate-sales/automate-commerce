import { cookies } from 'next/headers'

export async function GET() {
    cookies().delete('ergo_lead_id')
    return Response.json({ message: 'Cookies cleared' })
}