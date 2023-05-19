'use client'

import MenuItem from "./MenuItem";

interface MobileMenuProps {
    visible?: boolean;
    onClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return null;
    }

    return (
        <div className='
            bg-neutral-800 
            absolute 
            md:hidden
            mt-14
            left-0
            top-0
            p-4
            border-2 
            w-full
            text-3xl
            text-white
            rounded-md
            '
        >   
            <div className="hover:text-black px-4 py-3">
                <MenuItem label="Home" onClick={() => {}}/>
            </div>
            <div className="hover:text-black px-4 py-3">
                <MenuItem label="About" onClick={() => {}}/>
            </div>
            <div className="hover:text-black px-4 py-3">
                <MenuItem label="Events" onClick={() => {}}/>
            </div>
            <div className="hover:text-black px-4 py-3">
                <MenuItem label="Contact" onClick={() => {}}/>
            </div>
            <div className="hover:text-black px-4 py-3">
                <MenuItem label="Social" onClick={() => {}}/>
            </div>
        </div>
    )
}

export default MobileMenu;