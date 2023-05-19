'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();

    return (
        <div className="">
            <Image 
                alt="Logo"
                className="md:block cursor-pointer hover:scale-110 transition"
                height="175"
                width="175"
                src="/images/anti-social.jpg"
            />
        </div>

    )
}

export default Logo;