import { titleFont } from './fonts';
import getCurrentUser from './actions/getCurrentUser';
import getEventInfo from './actions/getEventInfo';

import HeaderImage from './components/HeaderImage';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EventCard from './components/eventComponents/EventCard';
import Heading from './components/Heading';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const eventInfo = await getEventInfo();

  return (
    <ClientOnly>
      <div className='px-4'>
        <HeaderImage />
      </div>
      <Container>
          <div className="bg-white rounded-xl py-6 shadow-lg mt-2">
            <div className={`${titleFont.className} flex justify-center`}>
                <div className='text-4xl p-3 md:text-6xl md:p-10'>
                    <Heading 
                        title="upcoming events"
                    />
                </div>
            </div>
            <div className="flex flex-col mx-2 mt-2 py-6 px-3">
                <div className="flex flex-col gap-8 p-2">
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
            </div>
          </div>
      </Container>
    </ClientOnly>
  )
}

