import { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { IRepos } from '../../types/interfaces'
import Pie from '../Charts/Pie'
import Bar from '../Charts/Bar'


export interface IData{
  label: string
  value: number
}

const Charts = () => {
  const [repos, setRepos] = useState<IRepos[]>([])
  const { user } = useAppSelector(state => state.user)
  const { repos_url } = user

  // console.log(repos)

  const getRepos = async () => {
    const res = await fetch(repos_url + '?per_page=100');
    const data = await res.json();
    setRepos(data)
  }

  useEffect(() => { 
    getRepos() 
  }, [user])

  //Pie Chart

  const languages = repos?.reduce((total: any, repo) => {
    const lang = repo.language
    if (lang !== null) {
      if (!total[lang]) {
        total[lang] = { label: lang, value: 1 }
      }
      else {
        total[lang] = {
          ...total[lang],
          value: total[lang].value + 1
        }
      }
    }
    return total
  }, {})
// console.log(languages)
  const pieChartData:IData[] | any=Object.values(languages).sort((a:any,b:any)=>b.value-a.value).slice(0,5)

  return (
    <div className='container m-auto max-w-3xl'>
      <Pie data={pieChartData}/>
    </div>
  )
}

export default Charts