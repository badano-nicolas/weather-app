import { useState } from 'react';
import axios from 'axios';

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [forecast, setForecast] = useState(null);


    const getWeather = async ( lat, lon ) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        return axios(url)
    };


    const submitRequest = async location => {
        console.log(location);

        getWeather(location.coord.lat, location.coord.lon)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            
            console.log(error);
        } )

    };

    return {
        isError,
        forecast,
        submitRequest,
    };
};

export default useForecast;