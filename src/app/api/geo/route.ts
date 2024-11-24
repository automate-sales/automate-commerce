import geoip from 'geoip-lite';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const ip = await request.json();
  if (!ip) {
    return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
  }
  const geo = geoip.lookup(ip.ip);
  if (geo) {
    return NextResponse.json({
      ip: ip.ip,
      eu: geo.eu === '0' ? false : true,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      latitude: geo.ll[0], // Latitude
      longitude: geo.ll[1], // Longitude
    });
  }

  return NextResponse.json({ error: 'Geolocation data not found' }, { status: 404 });
}