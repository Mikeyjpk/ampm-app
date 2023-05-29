'use client'

import Image from 'next/image';

const HeaderImage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <Image 
                    className='w-full rounded-md shadow-md'
                    src='/images/anti-social-hero.png' 
                    alt='hero'
                    width={1000} 
                    height={1000} 
                />
            </div>
        </div>
    )
}

export default HeaderImage;