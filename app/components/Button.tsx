'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    menuItem?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label, 
    onClick, 
    disabled, 
    outline,
    small,
    icon: Icon,
    menuItem
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg 
            hover:opacity-80
            transition
            ${menuItem ? 'w-1/5' : 'w-full'}
            ${outline ? '' : 'bg-neutral-800'}
            ${outline ? 'border-black' : 'border-black'}
            ${outline ? 'text-black' : 'text-white'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : ''}
        `}
        >
            {Icon && (
                <Icon 
                    size={24}
                    className="
                        absolute
                        left-4
                        top-3
                    "
                />
            )}
            {label}
        </button>
    )
}

export default Button;