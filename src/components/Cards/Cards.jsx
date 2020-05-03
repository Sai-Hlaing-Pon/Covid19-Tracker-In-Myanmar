import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'loading....';

    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justfify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary gutterBottom" variant="h5"><b>အတည်ပြု</b></Typography><br></br>
                        <Typography variant="h5" color="primary"><CountUp start={0} end={confirmed.value} duration={5.5} separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                        အတည်ပြုသူအရေအတွက်</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary gutterBottom" variant="h5"><b>ပြန်လည်ကောင်းမွန်</b></Typography><br></br>
                        <Typography variant="h5" color="primary"><CountUp start={0} end={recovered.value} duration={5.5} separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">ပြန်လည်ကောင်းမွန်လာသူအရေအတွက် </Typography>
                    </CardContent>
                </Grid>              
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary gutterBottom" variant="h5"><b>သေဆုံး</b></Typography><br></br>
                            <Typography variant="h5" color="secondary"><CountUp start={0} end={deaths.value} duration={5.5} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">သေဆုံးသူအရေအတွက်</Typography>
                        </CardContent>
                    </Grid>
                </Grid>  
        </div>    
    )
}

export default Cards;