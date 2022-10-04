import { useAppSelector } from '../../app/hooks'
import {CgArrowTopRightR} from "react-icons/cg"
import { ImOffice, ImLocation2, ImLink } from 'react-icons/im';


const UserInfo = () => {
  const {user}=useAppSelector(state=>state.user);

  const {avatar_url,name,login,html_url,location,company,blog}=user;

  return (
    <section className='flex flex-col lg:flex-row  justify-center items-center container m-auto p-4 gap-5 '>
      <article className='flex flex-col sm:flex-row gap-y-2 justify-between items-center p-4  w-7/12 lg:w-4/12 shadow-2xl bg-emerald-100'>
        <img src={avatar_url} alt="avatar" className='h-[100px] rounded-full' />
        <div>
          <p className='font-semibold text-lg mb-1'>{name}</p>
          <p>@{login}</p>
        </div>
        <a href={html_url} target="_blank" className='text-3xl text-orange-600'><CgArrowTopRightR/></a>
      </article>
      <article className='p-4 flex flex-col gap-1 w-7/12 lg:w-4/12 shadow-2xl bg-emerald-100'>
        <div className='flex items-center justify-start gap-x-4 px-3'><ImOffice className='text-3xl text-blue-400'/>{company ? company : "Open To Work"}</div>
        <div className='flex items-center justify-start gap-x-4 px-3'><ImLocation2 className='text-3xl text-blue-400'/>{location ? location : "Not Certain"}</div>
        <div >
          <a href={blog ? blog : "#"} target="_blank" className='flex items-center justify-start gap-x-4 px-3'><ImLink className='text-3xl text-blue-400'/> <span className='hidden md:inline-block'>{blog ? blog : "Not Certain"}</span> <span className='md:hidden'>Portfolio</span></a>
          </div>
      </article>
    </section>
    )
}

export default UserInfo