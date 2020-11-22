import React, { Component } from 'react';
import { Cards, Chart, CountryPicker, Timepicker, Logo } from './components';
import styles from './App.module.css';
import  fetchData from './API';

class App extends Component {
    state={
        data: {},
        country:'',
        DateStart:0,
        DateEnd:30,
    }



    async componentDidMount() { 
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }
    handleCountryChange = async (country)=>{
        const data = await fetchData(country);
        this.setState({data:data,country:country});

    }
    handleDateStart =(e)=>{
        this.setState({
            DateStart: e
          });
        console.log(e);
    }
    handleDateEnd =(e)=>{
        this.setState({
            DateEnd: e
          });
          const {DateStart,DateEnd} = this.state
          console.log(
            DateEnd-DateStart
          );
    }

    render(){
        const { data , country, DateEnd, DateStart} = this.state;
        return(
               
            <div className={styles.container}>
                    <Logo />
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Timepicker data={data} country={country} getdate={this.getDate} 
                        handleDateEnd={this.handleDateEnd} 
                        handleDateStart={this.handleDateStart}
                    /> 
                    <Chart data={data} country={country} DateStart={DateStart} DateEnd={DateEnd} /> 
             
            </div>
        );
    }


}

export default App;