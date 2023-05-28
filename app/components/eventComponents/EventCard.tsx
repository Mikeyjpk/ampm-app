'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SafeEventInfo, SafeUser } from "../../types";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import toast from 'react-hot-toast';
dayjs.extend(advancedFormat);
dayjs.extend(utc);

import Button from "../Button";

interface EventCardProps {
    data: SafeEventInfo;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const EventCard: React.FC<EventCardProps> = ({
    data,
    onAction,
    disabled,
    currentUser,
}) => {
    const router = useRouter();

    const now = dayjs();
    //convert the date to a dayjs object
    const date = dayjs(data.date).local();
    //format as a nice date string
    const dateString = date.format(`dddd MMMM Do YYYY`);
    //for info on how to display a date, check this link
    //https://day.js.org/docs/en/display/format
    //or advanced format plugin
    //https://day.js.org/docs/en/plugin/advanced-format

    const hasAlreadyOccurred = date.isBefore(now);

    // const handleDeleteClick:SubmitHandler<FieldValues> = async () => {
    //     try {
    //         await axios.post(`/api/events/${data.eventId}`);
    //         toast.success('Event deleted');
    //     }
    //     catch(e){
    //         toast.error(`failed to delete event - ${e.message}`);
    //     }
    // }

    return (
        <div className="py-2 border-b-2 border-dashed pb-4 relative">  
            <div className="flex flex-row justify-between md:justify-evenly align-baseline px-4">
                <div className="text-md pt-3.5">
                    <div className={hasAlreadyOccurred ? "": "font-semibold"}>
                        {dateString}
                    </div>
                </div>
                <div className="w-2/6">
                    <Button 
                        label="Tickets"
                        onClick={() => router.push(`/eventPage/${data.id}`)}
                        disabled={hasAlreadyOccurred}
                    />
                </div>
                {/* { currentUser && (
                    <div className="w-2/6">
                    <Button 
                        label="Delete"
                        onClick={handleDeleteClick}
                    />
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default EventCard;

