import getCurrentUser from "../actions/getCurrentUser";
import getEventInfo from "../actions/getEventInfo";
import ClientOnly from "../components/ClientOnly";
import HeaderImage from "../components/HeaderImage";
import EmptyState from "../components/EmptyState";
import Container from "../components/Container";
import { titleFont } from "../fonts";
import Heading from "../components/Heading";
import EventCard from "../components/eventComponents/EventCard";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const eventPage = async () => {
    const currentUser = await getCurrentUser();
    const eventInfo = await getEventInfo(true);

    if (!currentUser) {
        return (
            <Container>
                <div className="bg-white">
                    <HeaderImage />
                    <div 
                        className='text-xl pt-10 font-semibold'>
                    <EmptyState
                        title='Unauthorized'
                        subtitle='Please login to edit events'
                    />
                    </div>
                </div>
            </Container>
        )
    }

    if (eventInfo.length === 0) {
        return (
          <Container>
            <div className=''>
              <HeaderImage />
            </div>
            <div className='text-xl pt-10 font-semibold'>
              <EmptyState
                title='Uh oh'
                subtitle='There are no listed events'
              />
            </div>
          </Container>
        )
    }

    return (
        <ClientOnly>
        <Container>
          <div className='flex flex-col gap-3'>
            <HeaderImage />
              <div className="flex flex-col bg-white rounded-t-md rounded-b-xl shadow-2xl pt-4 pb-4">
                <div className={`${titleFont.className} flex justify-center text-neutral-800 text-4xl py-4 border-b-2 border-gray-200`}>
                  <Heading 
                      title="all events"
                  />
                </div>
                  <div className="flex flex-col gap-2 mt-2">
                    {eventInfo.map((eventInfo) => {
                        return (
                          <EventCard 
                              key={eventInfo.id}
                              data={eventInfo}
                              currentUser={currentUser}
                          />
                        )
                    })} 
                </div>
                <div className='flex flex-row justify-center pt-4'>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-100'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-200'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-300'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-400'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-300'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-200'/>
                  < BsFillEmojiFrownFill size={30} className='text-neutral-100'/>
                </div>
              </div>
          </div>
        </Container>
      </ClientOnly>
    )
}

export default eventPage;