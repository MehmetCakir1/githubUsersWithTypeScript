import { FC } from "react"
import { IData } from "../Main/Charts"

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PieChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, PieChart);


interface IPieProps {
    data: IData[]
  } 

const Doughnut:FC<IPieProps> = ({data}) => {
   
    const chartConfigs = {
        type: "doughnut2d", 
        width: "100%", 
        height: "400", 
        dataFormat: "json", 
        dataSource: {
          chart: {
            caption: "Stars Per Language",
            yaxisname: "Stars",
            xaxisname: "Repos",
            showvalues: "1",
            captionFontColor: "#102a42",
            captionFontSize: 20,
            baseFontSize: 16,
            paletteColors:
              " #F2726F,#ecae10,#2caeba, #5D62B5,  #35e91d, #6E80CA ,#8d6e63,",
            showHoverEffect : 1,
            pieRadius: "50%",
            animation: 1,
            pieYScale: 70,
          },
          data,
        },
      };

      return (
        <div className='bg-white rounded-md  mb-6 w-[90%] md:w-5/12 '>
          <ReactFC {...chartConfigs} />
        </div>
      )
}

export default Doughnut