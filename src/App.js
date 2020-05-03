import React from 'react';
//import Cards from './components/Cards/Cards';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './img/image.png';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';



class App extends React.Component {
    state = {
        data:{},
        country:'',
    }

  async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data:fetchedData, country: country});
        //fetch data
        //set the state
    }
    render() {
        const{ data, country} = this.state;
        return (
            <div className={styles.container}>   
                <img className={styles.image} src={coronaImage} alt='Covid-19' />        
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} /><br></br>
                <Chart data={data} country={country} /><br></br><br></br>     
                <Button variant="contained" color="primary">API + Source Code</Button> 
            </div>
            
        )
    }
}

export default App;