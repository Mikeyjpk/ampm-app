import prisma from "@/app/libs/prismadb";

interface IParams {
    eventId?: string;
}

export default async function getEventById(params: IParams) {
    try {
        const { eventId } = params;

        const eventInfo = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        });

        if (!eventInfo) {
            return null;
        }

        return {
            ...eventInfo,
            createdAt: eventInfo.createdAt.toISOString()
            //updatedAt: eventInfo.updatedAt.toISOString()
        }
    } catch (error: any) {
        throw new Error(error)
    }
}