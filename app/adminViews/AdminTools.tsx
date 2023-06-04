'use client'

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import useEventModal from "../components/hooks/useEventModal";

const AdminTools = () => {
    const eventModal = useEventModal();
    const router = useRouter();

    return (
        <>
            <div className="w-2/5">
                <div className="flex flex-col gap-6">
                    <Button 
                        label="Create"
                        onClick={eventModal.onOpen}
                    />
                    <Button 
                        label="Delete"
                        onClick={() => router.push('/eventViews')}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminTools;