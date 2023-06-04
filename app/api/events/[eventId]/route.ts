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

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const event = await prisma.event.delete({
        where:{
            id: params.eventId
          }
    });

    return NextResponse.json(event);
}