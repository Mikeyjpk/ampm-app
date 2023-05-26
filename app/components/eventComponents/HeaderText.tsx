'use client'

import { titleFont } from "@/app/fonts"
import { title } from "process"

import { AiTwotoneCalendar } from "react-icons/ai"
import { BsHearts } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"

interface HeaderProps {
    heading: string | null;
    subtitle: string | null;
    date: string | null;
    allAges?: boolean;
}

const HeaderText: React.FC<HeaderProps> = ({
    heading,
    subtitle,
    date,
    allAges,
    
}) => {
    return (
        <div className='flex flex-col px-2'>

            <div className="flex justify-between align-baseline pt-3">
                <div className={titleFont.className}>
                    <div className='text-xl'>
                        {date}
                    </div>
                </div>
                <div>
                    <div className='flex flex-row bg-orange-200 w-20 h-4 items-center justify-center rounded-full'>
                        <div className="font-semibold text-xs">
                            featured 
                        </div>
                        < BsHearts size={16}/>
                    </div>
                </div>
            </div>

            <div className={titleFont.className}>
                <div className='text-5xl flex'>
                    <div className="pt-[6px]">ANTI</div>
                    <div className="text-6xl">//</div>
                    <div className="pt-[6px]">SOCIAL</div>
                </div>
            </div>
            
            <div className="font-semibold">
                {heading}
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

            <div className='pt-2'>
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
                                {date}
                            </div>
                        </div>
                    </div>

                    <div className='flex py-2 md:border-l-4 md:pl-6 md:border-dashed'>
                        <div className='flex flex-row bg-neutral-200/70 w-10 h-10 items-center justify-center rounded-lg shadow-sm'>
                            <a href='https://www.google.com/maps/place/Burdekin+Hotel/@-33.8770758,151.2026737,15z/data=!3m2!4b1!5s0x6b12a53c29912475:0xc8dd3516e0305874!4m6!3m5!1s0x6b12ae165447c0c3:0xc3212176d6e76704!8m2!3d-33.877094!4d151.212952!16s%2Fg%2F1tltmjd0'>
                                <MdLocationPin size={18} />
                            </a>
                        </div>
                        <div className='px-2 text-sm text-black overflow-auto'>
                            <div className='font-semibold'>
                                Location
                            </div>
                            <div className='text-neutral-700'>
                                <span className='font-semibold'>Burdekin Hotel</span> 2 Oxford St Darlinghurst
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
        </div>

    )
}

export default HeaderText