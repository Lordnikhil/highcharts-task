import React, { useEffect, useState } from 'react';
import './App.css';
import { Chart } from './app/Chart';
import {useSelector, useDispatch} from 'react-redux';
import {setChartData , perFormLogout} from './actions'
import ChartData from './json/chart_data.json'
import Grid from './app/Table';
import { Button } from '@material-ui/core';

function App(props) {
  const chartData = useSelector(state=>state.chartData)
  const dispatch = useDispatch();
  let [showChart, setShowChart] = useState(true)
  dispatch(setChartData(ChartData))
    

  return (
    <div className="App">
      <Button onClick={()=>setShowChart(!showChart)}>{ !showChart ? "Chart" : "Table"} View</Button>
      <Button onClick={()=>{
        dispatch(perFormLogout())
        props.history.push("/");
        }}>Log out</Button>
      <div>

      </div>
      {
        showChart ? <Chart /> : <Grid/>
      }
    </div>
  );
}

export default App;
