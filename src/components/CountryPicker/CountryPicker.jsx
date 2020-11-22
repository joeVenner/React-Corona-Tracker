import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl,FormHelperText} from '@material-ui/core';
import {fetchCountries} from '../../API';
import styles from './CountryPicker.module.css';

 
const CountryPicker = ({handleCountryChange})=>{

    const [CountryNames,setCountryNames] = useState([]);
    useEffect(()=> {
        const fetchCountry = async () => {
            setCountryNames(await fetchCountries());
        }
        fetchCountry();
        
        
    },[setCountryNames]);
    const CountryOprtions = CountryNames.map((country,index)=>
        <option value={country}>{country}</option>
    )

    return(
        <FormControl className={styles.containerfc} onChange={(e)=>handleCountryChange(e.target.value)}>
            <FormHelperText className={styles.containerfh}
                id="my-helper-text">Choose The Country Name 
            </FormHelperText>
            <NativeSelect className={styles.containerns} >       
                <option value={""}>Global</option>
                {CountryOprtions}
            </NativeSelect> 
        </FormControl>
    )

}

export default CountryPicker;