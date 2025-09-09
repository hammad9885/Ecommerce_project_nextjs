import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    
    return (
        <>
        <div className='hidden sm:flex gap-2 rounded-md items-center ring-1 ring-gray-200 shadow-md px-2 py-1'>
            <FaSearch className='h-4 w-4 text-gray-500' />
            <input type="text" placeholder='Search...' className='text-sm outline-0' />
        </div>
        </>
    )
}
export default SearchBar