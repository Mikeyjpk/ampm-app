'use client'

import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import MenuItem from "./MenuItem";

interface NavMenuProps {
    visible?: boolean;
    onClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({visible}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    if (!visible) {
        return null;
    }

    return (
        <div className="flex flex-row">   
            <div>
                <MenuItem label="Admin" onClick={registerModal.onOpen}/>
            </div>
            <div>
                <MenuItem label="Login" onClick={loginModal.onOpen}/>
            </div>
        </div>
    )
}

export default NavMenu;