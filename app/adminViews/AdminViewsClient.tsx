'use client'

import { SafeUser } from "../types";

import useLoginModal from "../components/hooks/useLoginModal";

import Button from "../components/Button";

import Container from "../components/Container";
import Heading from "../components/Heading";
import AdminTools from "./AdminTools";

interface AdminViewsClientProps {
    currentUser: SafeUser | null;
}

const AdminViewsClient: React.FC<AdminViewsClientProps> = ({ currentUser }) => {
    const loginModal = useLoginModal();

    return (
        <>  
            <Container>
                <div className="pt-10">
                    <div className="bg-white rounded-3xl shadow-md pt-10 pb-2 text-xl font-semibold">
                        <Heading 
                            title="Admin Tools"
                            center
                        />
                        {currentUser ? (
                            <div className="flex flex-col gap-8 p-10 mt-10 items-center">
                                < AdminTools />
                            </div>
                        ) : (

                            <div className="flex flex-col gap-3 p-3 mt-8 mb-4 items-center">
                                <div className="w-5/6 md:w-5/6 lg:w-1/6">
                                    < Button 
                                        label="Sign In"
                                        onClick={loginModal.onOpen}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </> 
    )
}

export default AdminViewsClient;
