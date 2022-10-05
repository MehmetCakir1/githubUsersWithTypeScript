import { useAppSelector } from '../../app/hooks'
import { RiGitRepositoryFill } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { VscGist } from "react-icons/vsc";

const Info = () => {
  const {user}=useAppSelector(state=>state.user)
  // console.log(user);
  const {public_repos,public_gists,followers,following}=user
  return (
    <div className='container m-auto flex flex-wrap gap-5 justify-center items-center mb-4'>
      <div className='flex gap-5 justify-center items-center'>
      <div className='flex items-center justify-center gap-x-4 w-[150px] py-3 font-semibold shadow-2xl bg-blue-100 rounded-lg'><RiGitRepositoryFill className='text-5xl text-red-500 bg-red-200 rounded-full p-2'/>
      <div>
        <p>{public_repos}</p>
        <p className='text-slate-500'>Repos</p>
      </div>
     </div>
      <div className='flex items-center justify-center gap-x-4 w-[150px] py-3 font-semibold  shadow-2xl bg-blue-100 rounded-lg'><FiUserCheck className='text-5xl text-emerald-800 bg-emerald-200 rounded-full p-2'/>
      <div>
        <p> {followers}</p>
        <p className='text-slate-500'>Followers</p>
      </div>
     </div>
      </div>
      <div className='flex gap-5 justify-center items-center'>
      <div className='flex items-center justify-center  gap-x-4 w-[150px] py-3 font-semibold  shadow-2xl bg-blue-100 rounded-lg'><BsPeopleFill className='text-5xl text-cyan-600 bg-cyan-200 rounded-full p-2'/>
      <div>
        <p>{following}</p>
        <p className='text-slate-500'>Following</p>
      </div>
      </div>
      <div className='flex items-center justify-center  gap-x-4 w-[150px] py-3 font-semibold  shadow-2xl bg-blue-100 rounded-lg'><VscGist className='text-5xl text-pink-700 bg-pink-200 rounded-full p-2'/>
      <div>
        <p>{public_gists}</p>
        <p className='text-slate-500'>Gist</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Info