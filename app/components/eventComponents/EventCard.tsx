'use client'
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti" 

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
dayjs.extend(utc);

import { SafeEventInfo, SafeUser } from "../../types";
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
    const dateString = date.format(`dd. MMM Do YYYY`);
    //for info on how to display a date, check this link
    //https://day.js.org/docs/en/display/format
    //or advanced format plugin
    //https://day.js.org/docs/en/plugin/advanced-format

    const hasAlreadyOccurred = date.isBefore(now);

    const handleDeleteClick:SubmitHandler<FieldValues> = async () => {
        try {
            await axios.delete(`/api/events/${data.id}`);
            router.refresh();
            toast.success('Event deleted');
        }
        catch(error){
            toast.error(`failed to delete event`);
        }
    }

    return (
        <div className="p-4 border-b-2 relative">  
            <div className="flex flex-row justify-between md:justify-evenly">
                <div className="text-md pt-3 font-semibold">
                    <div className="pl-4">
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
                {currentUser && (
                    <div 
                        onClick={handleDeleteClick}
                        className="
                            flex 
                            justify-center 
                            items-center 
                            w-10
                            h-10
                            bg-red-500 
                            rounded-full 
                            mt-2
                            mr-2
                            cursor-pointer
                        "
                    >
                        <TiDelete
                            size={40}
                            className="text-white" 
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventCard;

