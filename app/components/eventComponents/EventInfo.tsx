'use client'

import { BsBalloonHeartFill } from 'react-icons/bs';

const EventInfo = ({

}) => {
    return (
        <div className='flex flex-col gap-4 text-md'>
            <div className='text-xl font-bold'>
                About this event
            </div>
            <div className='flex flex-col gap-4 pb-4'>
                <div className='border-b-2 border-dashed border-neutral-800 pb-3'>
                    <div className='font-semibold'>
                        ANTI//SOCIAL
                    </div>
                    <div>
                        Alternative, Rock, Pop-Punk &amp; Emo Anthems from 10:00pm &apos;til they kick us out, every Saturday night. 
                    </div>
                    <div>
                        From Blink-182 and Good Charlotte, through to Bring Me The Horizon, A Day To Remember, Paramore, The Killers, and everything in between.
                    </div>
                    <div className='flex flex-row'>   
                            Hit us with your requests
                        <a 
                            className='bg- pl-1 text-blue-700 hover:underline' 
                            href='https://www.instagram.com/antisocial.au/'
                            > antisocial.au
                        </a> 
                    </div>
                </div>
                <div className='border-b-2 border-dashed border-neutral-800 pb-3'>
                    <div className='font-semibold'>
                        Burdekin Saturdays
                    </div>
                    <div>
                        Burdekin Saturdays is a two-level party takeover at the Burdekin Hotel, making dance floor heat from 8pm till late. Anti-social will always be on Level 1, with the Ground Floor supplying party beats each week.
                    </div>
                </div>
                <div className='font-semibold'>
                    Got a birthday coming up?
                    <div className='font-light'>
                        Show your ID to the door staff for 2 free drinks. Birthday must be within 7 days of the event.
                    </div> 
                </div>
            </div>
            <div className='flex flex-row justify-center gap-2'>
                <BsBalloonHeartFill className='justify-center text-neutral-400' size={16}/>
                <BsBalloonHeartFill className='justify-center text-neutral-600' size={16}/>
                <BsBalloonHeartFill className='justify-center text-neutral-800' size={16}/>
                <BsBalloonHeartFill className='justify-center text-neutral-600' size={16}/>
                <BsBalloonHeartFill className='justify-center text-neutral-400' size={16}/>
            </div>
            
        </div>

    )
}

export default EventInfo;