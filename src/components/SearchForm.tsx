import { useRef, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useAppDispatch } from "../app/hooks";
import { getUser } from "../features/userSlice";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue=useRef<HTMLInputElement>(null);
  const dispatch=useAppDispatch()
  // console.log(searchTerm)
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-3">GITHUB USERS</h1>
      <div className="flex items-center w-full max-w-lg m-auto px-1 py-2 bg-yellow-200">
        <div className="flex justify-center items-center py-1 mr-2 w-full">
        <MdOutlineSearch className="text-3xl" />
        <input type="search" className="p-1 w-full outline-none text-xl"
        ref={searchValue}
         // @ts-ignore: Object is possibly 'null'.
        onChange={()=>setSearchTerm(searchValue.current.value)}/>
        </div>
        <button className="px-4 py-1 bg-red-400 rounded-md"
        onClick={()=>dispatch(getUser(searchTerm))}
        >Search</button>
      </div>
    </div>
  );
};

export default SearchForm;
