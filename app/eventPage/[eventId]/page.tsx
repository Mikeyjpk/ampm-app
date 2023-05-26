import getEventById from "@/app/actions/getEventById";

import ClientOnly from "@/app/components/ClientOnly";

import EmptyState from "@/app/components/EmptyState";
import EventBriteButton from "@/app/components/EventBriteButton";
import HeaderImage from "@/app/components/HeaderImage";
import EventInfo from "@/app/components/eventComponents/EventInfo";

import HeaderText from "@/app/components/eventComponents/HeaderText";

interface IParams {
    eventId?: string;
}

const EventPage = async ({ params }: { params: IParams}) => {
    const eventInfo = await getEventById(params);

    if (!eventInfo) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <HeaderImage />
            <div className="bg-white rounded- shadow-lg px-3">
                <HeaderText 
                    heading={eventInfo.heading}
                    subtitle={eventInfo.subtitle}
                    date={eventInfo.date}
                    />
                <EventInfo />
            </div>
                <EventBriteButton 
                    eventIdNumber={eventInfo.eventId}
                />
        </ClientOnly>
    )
}

export default EventPage;
