import React, { useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button,Select } from '@material-ui/core';

import {useSelector} from 'react-redux';

export function Chart (){

  const ChartData = useSelector(state=>state.chartData)

    let [chartType, setChartType] = useState("bar") //area //bar //line
    const updateButton = useRef(null)

    // console.log(ChartData.map((item)=>{
    //   return {x:item.dom,y:item.dow,name: item.insid}
    // }))

    const options = {
        chart: {
          type: chartType,
          events: {
            load: function() {
              console.log("chart loaded")
              let chart = this;
              console.log(updateButton.current)
              
              updateButton.current.addEventListener("change", (event) => {
                console.log(event.target.value)
                setChartType(event.target.value)
                console.log("changed")
                chart.series[0].update({
                  type: event.target.value
                });
              });
            }
          }
        },
        boost: {
          useGPUTranslations: true
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            "turboThreshold": ChartData.length,
            // data: ChartData.map((item)=>[item.dom,item.dow])
            data: ChartData.map((item)=>{
              return {x:item.dom,y:item.dow,name: item.insid}
            })
          }
        ]
      };

    const downloadFile = async () => {
        const fileName = "file";
        const json = JSON.stringify(ChartData);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
      
    return(
        <div>
            <Button onClick={downloadFile}>Dowload JSON</Button>
            <br/>
            <Select ref={updateButton} native 
              value={chartType}
              // onChange={handleChange}
              >
              <option value={"line"}>Line</option>
              <option value={"bar"}>Bar</option>
              <option value={"area"}>Area</option>
            </Select>

            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}