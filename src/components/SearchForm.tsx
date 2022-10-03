import { MdOutlineSearch } from 'react-icons/md';

const SearchForm = () => {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold py-3'>GITHUB USERS</h1>
        <div className='flex items-center w-full max-w-lg m-auto px-1 py-2 bg-yellow-200'>
            <MdOutlineSearch className='text-3xl'/>
            <input type="search" className='p-1 w-9/12 outline-none text-xl mr-2' />
            <button className='px-4 py-1 bg-red-400 rounded-md'>Search</button>
        </div>
    </div>
  )
}

export default SearchForm