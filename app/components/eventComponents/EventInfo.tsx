'use client'

import { BsBalloonHeartFill } from 'react-icons/bs';

const EventInfo = ({

}) => {
    return (

        <div className='flex flex-col px-2'>
            <div className='flex flex-col gap-3'>
                <div className='text-xl font-bold'>
                    About this event
                </div>
                <div className='text-md font-semibold'>
                    ANTI//SOCIAL
                </div>
                <div className='text-sm text-neutral-700 border-b-2 border-dashed'>
                    <div>
                        Alternative, Rock, Pop-Punk &amp; Emo Anthems from 10:00pm &apos;til they kick us out, every Saturday night. 
                    </div>
                    <div>
                        From Blink-182 and Good Charlotte, through to Bring Me The Horizon, A Day To Remember, Paramore, The Killers, and everything in between.
                    </div>
                    <div className='py-2 flex flex-row align-baseline'>   
                            Hit us with your requests
                        <a className='bg- pl-1 text-blue-700 hover:underline' href='https://www.instagram.com/antisocial.au/'
                            >antisocial.au
                        </a> 
                    </div>
                </div>
                <div className='text-md font-semibold'>
                    Burdekin Saturdays
                </div>
                <div className='flex flex-col gap-3 pb-2 border-b-2 border-dashed text-sm'>
                    <div>
                        Burdekin Saturdays is a two-level party takeover at the Burdekin Hotel, making dance floor heat from 8pm till late. Anti-social will always be on Level 1, with the Ground Floor supplying party beats each week.
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-row gap-2 font-semibold  text-sm'>
                        <BsBalloonHeartFill size={16}/> Got a birthday coming up ? 
                    </div>
                    <div className='text-sm text-neutral-700'>
                        Show your ID to the door staff for 2 free drinks. Birthday must be within 7 days of the event.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventInfo;