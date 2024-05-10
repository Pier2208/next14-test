import { Charts } from "@/types/Seatsio";
import { NextResponse } from "next/server";

// fetch all seatmaps
export async function GET() {
  try {
    const res = await fetch('https://api-na.seatsio.net/charts', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.SEATSIO_SECRET_WORKSPACE_KEY + ":").toString('base64')}`
      }
    })
    const seatmaps: Charts = await res.json();
    return NextResponse.json(seatmaps, { status: 200 })
  } catch (err) {
    console.log("[seatmaps]", err)
    return new NextResponse("Internal Error", { status: 500 })
  }
}