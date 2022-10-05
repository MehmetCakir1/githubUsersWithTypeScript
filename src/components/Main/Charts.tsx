import { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { IRepos } from '../../types/interfaces'
import Pie from '../Charts/Pie'
import Bar from '../Charts/Bar'
import Doughnut from '../Charts/Doughnut'


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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  //Bar Chart

  const stars = repos?.reduce((total: any, repo)=>{
    total[repo.name]={label: repo.name, value: repo.stargazers_count}
    return total
  },{})
  
  const barChartData : IData[] | any = Object.values(stars).sort((a : any, b: any)=>{
     return b.value - a.value
    }).slice(0, 5)

    //Doughnut Chart
    const starsPerLanguages = repos?.reduce((total: any, repo) => {
      const lang = repo.language
      if (lang !== null) {
        if (!total[lang]) {
          total[lang] = { label: lang, value: repo.stargazers_count }
        }
        else {
          total[lang] = {
            ...total[lang],
            value: total[lang].value + repo.stargazers_count
          }
        }
      }
      return total
    }, {})
    const doughnutChartData : IData[] | any = Object.values(starsPerLanguages).sort((a : any, b: any)=>{
      return b.value - a.value
     }).slice(0, 5)

  return (
    <div className='container m-auto'>
      <div className='flex justify-center items-center gap-9'>
      <Pie data={pieChartData}/>
      <Doughnut data={doughnutChartData}/>
      </div>
      <Bar data={barChartData}/>
    </div>
  )
}

export default Charts