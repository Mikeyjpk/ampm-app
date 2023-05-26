import { NextResponse } from "next/server";
import  prisma  from "@/app/libs/prismadb";


export async function POST(
    request: Request
    ) {
    const body = await request.json();
    
    const {
        heading,
        subtitle,
        date,
        allAges,
        eventId
    } = body;

    const event = await prisma.event.create({
        data: {
            heading,
            subtitle,
            date,
            allAges,
            eventId,
        }
    });

    return NextResponse.json(event);
}