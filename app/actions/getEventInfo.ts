import prisma from "@/app/libs/prismadb"
import dayjs from 'dayjs';

export default async function getEventInfo(includeExpiredEvents: boolean = false) {
    try {
        const eventInfo = await prisma.event.findMany({
            orderBy: {
                date: 'asc'
            }
        });

        const today = dayjs();
        const safeEventInfo = eventInfo.filter(event => includeExpiredEvents || dayjs(event.date).isAfter(today)).map((event) => ({
            ...event,
            createdAt: event.createdAt.toISOString(),
          }));

        return safeEventInfo;
    } catch (error: any) {
        throw new Error(`unable to fetch eventInfo ${error}`);
    }
}