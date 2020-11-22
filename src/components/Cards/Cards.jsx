import React from 'react';
import {Card,CardContent,Typography, Grid} from '@material-ui/core';
import styles ,{green,yellow,red} from './Cards.module.css';
import CountUp from 'react-countup';
import cx  from 'classnames';


const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}} )=>{
    if(!confirmed){
        return "Loading";
    }   
    /*const myLists=[confirmed,recovered,deaths];*/
    const colors = [yellow,green,red]
    const myLists={confirmed:confirmed,recovered:recovered,deaths:deaths};
    
    const listItems = Object.keys(myLists).map((key,item) =>
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,colors[item])}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <CountUp
                                start={1000}                    
                                end={myLists[key].value}
                                duration={0.7}
                                separator=","
                            />
                            </Typography>
                        <Typography variant="h5">{key}</Typography>
                        <Typography color="textSecondary">{lastUpdate.split("T")[0]}</Typography>
                        <Typography variant="body2">Number of {key} cases</Typography>
                    </CardContent>
                </Grid>         
    );  
        return(
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                {listItems}
            </Grid>
            
        </div>
       
    )

}

export default Cards;