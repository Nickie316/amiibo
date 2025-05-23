import { api } from "@/lib/api";
import { Amiibo } from "@/types/amiibo";
import { NextResponse } from "next/server";

export async function GET() {
   const amiibo: Amiibo[] = await api.get('/amiibo')

   return NextResponse.json({ amiibo })
}