import { useState } from 'react';
import axios from 'axios';

const useForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);



    // Get wether
    const getWeather = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        return axios(url);
    };

    // Get current location
    const getLocation = async () => {
        const url = "http://ip-api.com/json";
        console.log("get currentlocation");
        return axios(url);
    }

    // Parse response to location format
    const getParsedLocation = async () => {
        const locationInfo = await getLocation();
        console.log("getpasedlocation");
        const location = {
            "id": 0,
            "name": locationInfo.data.city,
            "state": "",
            "country": locationInfo.data.countryCode,
            "coord": {
                "lon": locationInfo.data.lon,
                "lat": locationInfo.data.lat
            }
        }
        return location;
    }

    // Get current location, parse response, get weather
    const getWeatherCurrentLocation = async () => {
        const currentLocation = await getParsedLocation();
        console.log("getweathercurrentlocation")
        submitRequest(currentLocation);
    }


    const submitRequest = async location => {

        setCurrentLocation(location);
        getWeather(location.coord.lat, location.coord.lon)
            .then((res) => {
                console.log('submit request ', res);
                setForecast(res.data);
            }).catch((error) => {

                console.log(error);
            })

    };

    return {
        forecast,
        currentLocation,
        submitRequest,
        getWeatherCurrentLocation
    };
};

export default useForecast;