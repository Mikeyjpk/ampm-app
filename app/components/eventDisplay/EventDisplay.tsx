'use client'

import { BsHearts } from 'react-icons/bs';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { ImInstagram } from 'react-icons/im';
import { BsBalloonHeartFill } from 'react-icons/bs';

import { titleFont } from "@/app/fonts";

interface EventDisplayProps {
    title: string;
    subtitle: string;
    fullDate: string;

    allAges?: boolean;
    shortDate?: string;
}

const EventDisplay: React.FC<EventDisplayProps> = ({
    title,
    fullDate,
    subtitle,

    allAges,
    shortDate,
}) => {
    return (
        <div className='flex flex-col px-2'>
            <div className=" py-6">
                <div className='flex flex-row bg-orange-200 w-20 h-4 items-center justify-center rounded-full'>
                <div className="font-semibold text-xs">
                    featured 
                </div>
                < BsHearts size={16}/>
                </div>
            </div>

            <div>
                {shortDate}
            </div>

            <div className={titleFont.className}>
                <div className='text-5xl py-3'>
                    {title}
                </div>
            </div>

            <div>
                { allAges ? (<div className='text-md'>All Ages</div>) : (<div className='text-sm'>Ages 18+</div>)}
            </div>

            <div className='text-neutral-600 py-4 text-sm'>
                Part of the <a href='https://www.eventbrite.com.au/cc/burdekin-saturdays-2188579' className='text-blue-600 hover:underline'>Burdekin Saturdays</a> collection
            </div>

            <div className='font-semibold text-neutral-800'>
                {subtitle} 
            </div>

            <div className='py-3'>
                <div className='text-xl font-bold py-3'>
                    When and Where
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex py-2 md:pr-3'>
                        <div className='flex flex-row bg-neutral-200/70 w-10 h-10 items-center justify-center rounded-lg shadow-sm'>
                            <AiTwotoneCalendar size={18}/>
                        </div>
                        <div className='px-3 text-sm text-black'>
                            <div className='font-semibold'>
                                Date & Time
                            </div>
                            <div>
                                {fullDate}
                            </div>
                        </div>
                    </div>

                    <div className='flex py-2 md:border-l-4 md:pl-6 md:border-dashed'>
                        <div className='flex flex-row bg-neutral-200/70 w-10 h-10 items-center justify-center rounded-lg shadow-sm'>
                            <a href='https://www.google.com/maps/place/Burdekin+Hotel/@-33.8770758,151.2026737,15z/data=!3m2!4b1!5s0x6b12a53c29912475:0xc8dd3516e0305874!4m6!3m5!1s0x6b12ae165447c0c3:0xc3212176d6e76704!8m2!3d-33.877094!4d151.212952!16s%2Fg%2F1tltmjd0'>
                                <MdLocationPin size={18} />
                            </a>
                        </div>
                        <div className='px-3 text-sm text-black'>
                            <div className='font-semibold'>
                                Location
                            </div>
                            <div className='text-neutral-700'>
                                <span className='font-semibold'>Burdekin Hotel</span> 2 Oxford St Darlinghurst, NSW 2010
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-3'>
                <div className='text-xl font-bold py-3'>
                    Refund Policy
                </div>
                <div>
                    No Refunds
                </div>
            </div>

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
                        <a className='pr-1' href='https://www.instagram.com/antisocial.au/'>
                            < ImInstagram size={16} />
                        </a>
                            Hit us with your requests
                        <a className='pl-1 text-blue-700 hover:underline' href='https://www.instagram.com/antisocial.au/'
                            >@antisocial.au
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
                    <div>
                        May 20: Resident DJs
                    </div>
                </div>

                <div className='flex flex-col mb-40'>
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

export default EventDisplay;


/*

𝐀𝐧𝐭𝐢-𝐒𝐨𝐜𝐢𝐚𝐥
Alternative, Rock, Pop-Punk & Emo Anthems from 10:00pm 'til they kick us out, every Saturday night. 

From Blink-182 and Good Charlotte, through to Bring Me The Horizon, A Day To Remember, Paramore, The Killers, and everything in between. 

Hit us with your requests @antisocial.au
——————————————————
Burdekin Saturdays
Burdekin Saturdays is a  two-level party takeover at the Burdekin Hotel, making dance floor heat from 8pm till late. Anti-social will always be on Level 1, with the Ground Floor supplying party beats each week.
May 20 = Resident DJs 
——————————————————
🎈 Got a birthday coming up? Show your ID to the door staff for 2 free drinks. Birthday must be within 7 days of the event.

*/