'use client'

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { SiFacepunch } from "react-icons/si";

import Logo from "./Logo";
import Container from "../Container";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const router = useRouter();
    return (
        <div className="fixed w-full bg-white shadow-sm">   
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />

                        {/* Mobile menu */}
                        <div onClick={toggleOpen} className="cursor-pointer transition md:hidden"> 
                            { isOpen ? (<SiFacepunch size={26}/>) : ( <GiHamburgerMenu size={26} />)}
                        </div>
                        < MobileMenu visible={isOpen}/>

                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <NavMenu visible={true}/>
                        </div>
                        
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Navbar;