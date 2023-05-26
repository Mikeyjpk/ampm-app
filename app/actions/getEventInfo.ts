import prisma from "@/app/libs/prismadb"

export default async function getEventInfo() {
    try {
        const eventInfo = await prisma.event.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });

        const safeEventInfo = eventInfo.map((event) => ({
            ...event,
            createdAt: event.createdAt.toISOString(),
          }));

        return safeEventInfo;
    } catch (error: any) {
        throw new Error(`unable to fetch eventInfo ${error}`);
    }
}