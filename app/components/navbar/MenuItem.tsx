'use client'

import { titleFont } from "@/app/fonts";

interface MenuItemProps {
    label: string;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    label,
    onClick,
}) => {
    return (
        <div className={titleFont.className}>
            <div
                onClick={onClick}
                className='
                    px-4 
                    py-3
                    md:py-0 
                    hover:bg-neutral-200 
                    cursor-pointer 
                    rounded-sm'
            >
                {label}
            </div>
        </div>
    )
}

export default MenuItem;