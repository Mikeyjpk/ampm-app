'use client'

import { SafeUser } from "@/app/types";

import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

import { SiFacebook, SiInstagram } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";

import MenuItem from "./MenuItem";
import useRegisterModal from "../hooks/useRegisterModal";


interface MobileMenuProps {
    currentUser?: SafeUser | null;
    visible?: boolean;
    onClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible, currentUser}) => {
    const router = useRouter();
    const registerModal = useRegisterModal();

    if (!visible) {
        return null;
    }

    return (
        <div className='
            absolute
            flex
            justify-end
            
            py-2
            px-4
            rounded-md 
            shadow-md
            bg-white 

            top-[60px]
            right-0
            text-lg
            '
        >   
            {currentUser ? (
                <>    
                    <MenuItem label="Events" onClick={() => router.push('/')}/>
                    <MenuItem label="Admin tools" onClick={() => router.push('/adminViews')}/>
                    <MenuItem label="Logout" onClick={() => signOut()}/>
                </>
            ) : (
                <>  
                    <div className="flex flex-row gap-2 align-baseline">
                        <div className="p-3 hover:scale-110 hover:opacity-80">
                            <a href='https://app.facebook.com/antisocial.au'>
                                <SiFacebook size={28} />
                            </a>
                        </div>
                        <div className="p-3 hover:scale-110 hover:opacity-80">
                            <a href='https://www.instagram.com/antisocial.au/'>
                                <SiInstagram size={28}/>
                            </a>
                        </div>
                        <div className="px-3 py-2.5 hover:scale-110 hover:opacity-80">
                            <div onClick={() => router.push('/')}>
                                <AiFillHome size={30}/>
                            </div>
                        </div>
                        {/* <MenuItem label="Create" onClick={registerModal.onOpen}/> */}
                    </div >  
                </>
            )}

        </div>
    )
}

export default MobileMenu;