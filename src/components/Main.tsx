import { useAppSelector } from '../app/hooks'
import Charts from './Main/Charts'
import Info from './Main/Info'
import UserInfo from './Main/UserInfo'

const Main = () => {
  const { user,loading,error } = useAppSelector(state => state.user)
  

  if(loading){
    return <img  className="block m-auto" src="images/spinner.gif" alt="loading-spinner" />
  }

  return (
    <main className='bg-slate-200 py-8 min-h-[calc(100vh-120px)]'>
      {
        user.login ?
        <>
          <Info />
          <UserInfo />
          <Charts />
        </>
        :
        <h2 className="text-center text-red-500 font-bold">{error}</h2>
      }
    </main>
  )
}

export default Main