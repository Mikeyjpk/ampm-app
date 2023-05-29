import { titleFont } from './fonts';
import { BsFillEmojiFrownFill } from 'react-icons/bs'
import getCurrentUser from './actions/getCurrentUser';
import getEventInfo from './actions/getEventInfo';

import HeaderImage from './components/HeaderImage';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EventCard from './components/eventComponents/EventCard';
import Heading from './components/Heading';
import EmptyState from './components/EmptyState';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const eventInfo = await getEventInfo();

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
                    title="upcoming events"
                />
              </div>
                <div className="flex flex-col gap-6 p-1 px-3">
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

