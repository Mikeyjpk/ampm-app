'use client'

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import useEventModal from "../components/hooks/useEventModal";

const AdminTools = () => {
    const eventModal = useEventModal();
    const router = useRouter();

    return (
        <>
            <div className="w-4/6 lg:w-1/6">
                <div className="p-4">
                    <Button 
                        label="Create"
                        onClick={eventModal.onOpen}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminTools;