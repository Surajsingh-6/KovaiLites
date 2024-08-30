import React from 'react'
import Link from 'next/link'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function page() {
  return (
    <div className='w-full h-12 bg-[var(--bga)] flex px-5 justify-between items-center p-2'>
        <div>
            <Link href="/Admin"><FontAwesomeIcon icon={faUser} className='h-8 mt-1'/></Link>
        </div>
        <div className='brunoAceSc text-2xl'><Link href="/"><h7>Kovai Lites</h7></Link></div>
        <div>
        <FontAwesomeIcon icon={faSearch} className='h-7 mt-1'/>
        </div>
    </div>
  )
}

export default page