import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../API';
import styles from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';



const Chart = ({data : {confirmed,deaths,recovered},country,DateEnd,DateStart})=>
{
    const [DailyData,setDailyData] = useState([]);

    
    useEffect(()=> {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
        
    },[]);
    
    const linechart =(
        
        DailyData.length 
          ? <Line 
                data = 
                {{
                    labels :DailyData.map(({date})=>date).slice(DateStart,DateEnd),
                    datasets : [{
                        data:DailyData.map(({confirmed})=>confirmed).slice(DateStart,DateEnd),
                        label : 'Infected',
                        borderColor:'#FFFF00',
                        fill:true,
                    },{
                        data:DailyData.map(({deaths})=>deaths).slice(DateStart,DateEnd),
                        label : 'Deaths',
                        borderColor:'#FF0000',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true,

                    }
                  
                ],

                }}
                
            /> : null
    
    )
    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels:['Confirmed','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor: [
                       
                            "rgba(113, 205, 205,0.4)",
                            "rgba(170, 128, 252,0.4)",
                            "rgba(255, 177, 101,0.4)"
                          ],
                        borderWidth: 2,
                        borderColor: [
                     
                            "rgba(113, 205, 205, 1)",
                            "rgba(170, 128, 252, 1)",
                            "rgba(255, 177, 101, 1)"
                          ],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={
                    {
                        legend:{display:false},
                        title:{display:true,text:` Current State in ${country} `}
                    }
                }
            />
        ) : null
        
    )
    return(
    
    <div className={styles.container}>
        {country ?   barChart:linechart}
    </div>
    );

};


export default Chart;