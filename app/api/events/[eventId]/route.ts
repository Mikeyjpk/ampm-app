import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    eventId?: string;
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    try {
        const currentUser = getCurrentUser();
    
        if (!currentUser) {
            return NextResponse.error();
        }
    
        const { eventId } = params;
    
        if (!eventId || typeof eventId !== 'string') {
            throw new Error('Invalid ID')
        }
    
    
        const event = await prisma.event.delete({
            where: {
                id: eventId,
                },
            }
        )
    
        return NextResponse.json(event);
    } catch (error: any) {
        console.log(`Could not delete event: ${error}`)
    }
}