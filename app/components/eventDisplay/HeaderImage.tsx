'use client'

import Image from 'next/image';

const HeaderImage = () => {
    return (
        <div>
            <div className='bg-neutral-100 flex justify-center items-center'>
                <Image 
                    width={1000} 
                    height={1000} 
                    src='/images/anti-social-hero.png' 
                    alt='hero'
                    className='
                        mt-14 

                        md:w-11/12 
                        md:mt-20
                        md:mb-4
                        md:rounded-t-lg
                        md:rounded-b-2xl

                        lg:mt-24
                        lg:mb-8
                        lg:w-10/12
                    '
                />
            </div>
        </div>
    )
}

export default HeaderImage;