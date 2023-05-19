'use client'

import MenuItem from "./MenuItem";

interface NavMenuProps {
    visible?: boolean;
    onClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({visible}) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="flex flex-row">   
            <div>
                <MenuItem label="Home" onClick={() => {}}/>
            </div>
            <div>
                <MenuItem label="About" onClick={() => {}}/>
            </div>
            <div>
                <MenuItem label="Events" onClick={() => {}}/>
            </div>
            <div>
                <MenuItem label="Contact" onClick={() => {}}/>
            </div>
            <div>
                <MenuItem label="Social" onClick={() => {}}/>
            </div>
        </div>
    )
}

export default NavMenu;