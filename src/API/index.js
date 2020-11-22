import axios from 'axios';
// import CountryPicker from '../components/CountryPicker/CountryPicker';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async (country)=>{
    let changeableurl = url;
    if(country){
        changeableurl = `${url}/countries/${country}`;
        console.log(changeableurl);

    }

    try{

        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableurl);
        return {
            confirmed,
            recovered, 
            deaths,
            lastUpdate
        };
        
    }catch(error){
        console.log(error);
    }
}
export const fetchDailyData=async ()=>{
    try{
        const { data }=await axios.get(`${url}/daily`);
        const modifiedData= data.map((DailyData)=>(
            {
                confirmed:DailyData.confirmed.total,
                deaths:DailyData.deaths.total,
                recovered:DailyData.recovered.total,
                date:DailyData.reportDate,
            }
        ));
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}
export const fetchCountries=async ()=>{
    try{
        const {data: {countries}} =await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }catch(error){
        console.log("error",error);
    }
}
export default fetchData;