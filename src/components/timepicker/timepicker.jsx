import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {fetchDailyData} from '../../API';
import Grid from '@material-ui/core/Grid';

const Timepicker=({data,country,getDate,handleDateStart,handleDateEnd})=>
{
    const [Dates,setDates] = useState([]);
    const [DateEnd,setDateEnd] = useState(()=>
    {   
         return '2020-10-31'
    });

    const [DateStart,setDateStart] = useState(()=>
    {
        return '2020-10-01'
    });


    useEffect(()=> {
        const fetchAPI = async () => {
            setDates(await fetchDailyData());
        }
        fetchAPI();
        
    },[]);
 
const DateStartChanger = (date) => {
    setDateStart(date);
    console.log(CleanDates.indexOf(DateStart));
}
const DateEndChanger = (date) => {
    setDateEnd(date);
    console.log(CleanDates.indexOf(DateEnd));
}

const CleanDates = Dates.map(({date})=>`${date.split("-")[0]}-${date.split("-")[1]}-${date.split("-")[2]}`);


const pickerstart = (
        <form  noValidate>
            <TextField
                id="datestart"
                // label="Start"
                type="date"
                defaultValue={DateStart}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
        

    )

const pickerend = (
        <form  noValidate>
            <TextField
                id="dateend"
                // label="End"
                type="date"
                defaultValue={DateEnd}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
        

    )
return (
    !country
    ?(
    <div className="styles.container">
        <Grid container spacing={3} style={{ padding: 20 ,marginTop : 20}}>
            <Grid container item xs={6} spacing={3} style={{ marginRight: 10 }} 
                onChange={(e)=>handleDateStart(CleanDates.indexOf(e.target.value))}>
                {pickerstart}
            </Grid>
            <Grid container item xs={6} spacing={3} 
                onChange={(e)=>handleDateEnd(CleanDates.indexOf(e.target.value))}>
                {pickerend}
            </Grid>
            
        </Grid>
    </div>
):null
)
       
    }

export default Timepicker;
