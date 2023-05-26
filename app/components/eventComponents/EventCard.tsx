'use client'

import { useRouter } from "next/navigation";
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
    actionLabel,
    actionId='',
    currentUser,
}) => {
    const router = useRouter();

    return (
        <div className="py-2 border-b-2 border-dashed pb-4 relative">  
            <div className="flex flex-row justify-between md:justify-evenly align-baseline px-4">
                <div className="text-md">
                    <div className="text-neutral-600">
                        {data.date}
                    </div>
                    <div className="font-semibold">
                        {data.heading}
                    </div>
                </div>
                <div className="w-2/6">
                    <Button 
                        label="Tickets"
                        onClick={() => router.push(`/eventPage/${data.id}`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default EventCard;

