'use client'

import { SafeUser } from "@/app/types";

import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

import { SiFacebook, SiInstagram } from "react-icons/si";

import MenuItem from "./MenuItem";

interface MobileMenuProps {
    currentUser?: SafeUser | null;
    visible?: boolean;
    onClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible, currentUser}) => {
    const router = useRouter();
    if (!visible) {
        return null;
    }

    return (
        <div className='
            absolute
            flex
            justify-end
            
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
                    <div className="flex flex-row gap-2">
                        <div className="p-3 hover:scale-110 hover:opacity-80">
                            <a href='https://www.facebook.com/AMPMemonight'>
                                <SiFacebook size={28} />
                            </a>
                        </div>
                        <div className="p-3 hover:scale-110 hover:opacity-80">
                            <a href='https://www.instagram.com/antisocial.au/'>
                                <SiInstagram size={28}/>
                            </a>
                        </div>
                    </div >  
                </>
            )}

        </div>
    )
}

export default MobileMenu;