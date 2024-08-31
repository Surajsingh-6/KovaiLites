import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faLocationDot, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function Mnavbar() {
return (
    <div className='md:hidden'>
        <div className='h-12 w-full bg-[#182540]'></div>
        <div className='h-12 w-5/6 rounded-3xl mx-auto flex justify-evenly items-center bg-[#ffffffc9] fixed bottom-0 left-1/2 transform -translate-x-1/2'>
            <div className='hover:text-[--bgaa]'><Link href="/Location"><FontAwesomeIcon icon={faLocationDot} /></Link></div>
            <div className='hover:text-[--bgaa]'><a href="tel:+917708734164"><FontAwesomeIcon icon={faPhone} /></a></div>
            <div className='hover:text-[--bgaa]'><Link href="/"><FontAwesomeIcon icon={faHouse} /></Link></div>
            <div className='hover:text-[--bgaa]'><Link href="/collections"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></div>
            <div className='hover:text-[--bgaa]'><Link href="/collection"><FontAwesomeIcon icon={faCartShopping} /></Link></div>
        </div>
    </div>
);
}

export default Mnavbar;