'use client'
// test 
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
                <div className="bg-white rounded-3xl shadow-md pt-10 mt-6 pb-2">
                    <div className="text-2xl font-semibold">
                        <Heading 
                            title="Admin Tools"
                            center
                        />
                    </div>
                    {currentUser ? (
                        <div className="flex flex-col gap-8 p-6 mt-6 items-center">
                            < AdminTools />
                        </div>
                    ) : (
                          <div className="flex flex-col gap-3 p-3 mt-8 mb-4 items-center">
                            <div className="w-2/5">
                                < Button 
                                    label="Sign In"
                                    onClick={loginModal.onOpen}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </> 
    )
}

export default AdminViewsClient;
