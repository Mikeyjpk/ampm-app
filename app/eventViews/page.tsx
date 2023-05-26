//this page is designed as a edit hub for the user, 
/*
 * if no log in - unauth 
 * if no events - empty state
 * 
 * if displayed events, button to delete
 * 
 * currently unable to delete items from the data base
 * 
 * possible fix is trying to edit data, 
 * then an item can be updated to boolean to show or hide the event, 
 * eventually the user will need to log in an mass delete events to avoid clutter
 */

// EVENTS ARE DISPLAYED ON THE HOME PAGE - THIS ROUTE IS UNDER CONSTRUCTION

import getEventInfo from "../actions/getEventInfo";
import getCurrentUser from "../actions/getCurrentUser";

import EmptyState from "../components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly"

import Container from "../components/Container";
import { titleFont } from "../fonts";
import Heading from "../components/Heading";
import EventCard from "../components/eventComponents/EventCard";

const EventViews = async () => {

    const eventInfo = await getEventInfo();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <div className="p-10">
                    <EmptyState 
                        title="Unauthorized"
                        subtitle="Login to use Admin Tools"
                    />
                </div>
            </ClientOnly>
        )
    }

    if (eventInfo.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Uh oh"
                    subtitle="There are no listed events"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <Container>
                <div className="bg-white rounded-xl py-6 shadow-lg">
                    <div className={`${titleFont.className} flex justify-center`}>
                        <div className='text-5xl p-3 md:text-6xl md:p-10'>
                            <Heading 
                                title="upcoming events"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mx-10 mt-2 py-6 px-3">
                        <div className="flex flex-col gap-8 p-2">
                            {eventInfo.map((eventInfo: any) => {
                                return (
                                    <EventCard 
                                        key={eventInfo.id}
                                        data={eventInfo}
                                        currentUser={currentUser}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </ClientOnly>
    )
}

export default EventViews;
