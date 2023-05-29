import getEventById from "@/app/actions/getEventById";
import { SafeEventInfo, SafeUser } from "../../types";


import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import EventBriteButton from "@/app/components/EventBriteButton";
import HeaderImage from "@/app/components/HeaderImage";
import EventInfo from "@/app/components/eventComponents/EventInfo";

import HeaderText from "@/app/components/eventComponents/HeaderText";

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Container from "@/app/components/Container";

dayjs.extend(advancedFormat);
dayjs.extend(utc);


interface IParams {
    eventId?: string;
}

const EventPage = async ({ params }: { params: IParams}) => {
    const eventInfo = await getEventById(params);
    
    if (!eventInfo) {
        return null;
    }

    //convert the date to a dayjs object
    const now = dayjs();

    
    // //format as a nice date string
    const date = dayjs(eventInfo.date).local();

    //for info on how to display a date, check this link
    //https://day.js.org/docs/en/display/format
    const dateString = date.format(`ddd MMM Do YYYY`);

    //or advanced format plugin
    //https://day.js.org/docs/en/plugin/advanced-format



    if (!eventInfo) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <Container>
                <div className="flex flex-col gap-1">
                    <HeaderImage />
                    <div className="bg-white rounded-xl px-3 pb-8 shadow-2xl">
                        <HeaderText 
                            heading={eventInfo.heading}
                            subtitle={eventInfo.subtitle}
                            date={dateString}
                        />
                        <EventInfo />
                    </div>
                </div>
                <div className="sticky bottom-0">
                    <EventBriteButton 
                        eventIdNumber={eventInfo.eventId}
                    />
                </div>
            </Container>
        </ClientOnly>
    )
}

export default EventPage;
