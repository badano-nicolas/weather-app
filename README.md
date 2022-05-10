# Wather app

Weather app written as code challenge using React.

## Deploy
- [Versel](https://weather-app-gamma-coral.vercel.app/)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Getting Started
https://weather-app-gamma-coral.vercel.app/

### Installing

1. Clone this repository
```
git clone https://github.com/damjtoh/weather-widget.git
cd weather-app
```

2. Install dependencies, for server and client.
```
npm install && cd client/ && npm install
```

3. Go '.env.sample' and rename it to '.env' file.

5. Set up your [OpenWEather](https://home.openweathermap.org/) API KEY as show below:
```
REACT_APP_OPENWEATHER_API_KEY=HERE_GOES_API_KEY
```

5. Build and run the aplication
```
npm run start
```

This command will transpile the nodejs app and make a production build of the react app and serve it on 3000 port

6. Go to http://localhost:3000


## Notes
- Installed tailwind to makes the styling more easy and learn.
- Installed react-select to handle the city list.
- Installed axios to call the weather api.
- Installed moment-timezone to calculate the day with timezone and timestamp.




## License
[MIT](https://choosealicense.com/licenses/mit/)
