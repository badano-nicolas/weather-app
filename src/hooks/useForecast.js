import { useState } from 'react';
import axios from 'axios';

const useForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchingLocation, setSearchingLocation] = useState(false)

    // Get onecall
    const getWeather = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        return axios(url);
    };

    // Parse response to location format
    const getParsedLocation = (location) => {
        const parsedLocation = {
            "coord": {
                "lon": location.coords.longitude,
                "lat": location.coords.latitude
            }
        }
        return parsedLocation;
    }

    // Get current location, parse response, get weather
    const getWeatherCurrentLocation = (position) => {
        if (!searchingLocation) {
            setSearchingLocation(true);
            submitRequest(getParsedLocation(position));
        }
    }

    const parseAndSetLocation = (location, timezone) => {
        const timezoneArray = timezone.split('/')
        location.country = timezoneArray[1].slice(0, 2).toUpperCase();
        location.name = timezoneArray[2].replace('_', ' ');
        setCurrentLocation(location);
    }


    const submitRequest = async location => {
        getWeather(location.coord.lat, location.coord.lon)
            .then((weather) => {
                setForecast(weather.data);
                if (!currentLocation) {
                    parseAndSetLocation(location, weather.data.timezone);
                }
                else {
                    setCurrentLocation(location);
                }
            }).catch((error) => {
                console.log(error);
            });
    };

    return {
        forecast,
        currentLocation,
        submitRequest,
        getWeatherCurrentLocation
    };
};

export default useForecast;