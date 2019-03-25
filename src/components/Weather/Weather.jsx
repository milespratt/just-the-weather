import React, { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faWind,
  faSun,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faCloudMoonRain,
  faSnowflake,
  faSmog,
  faLongArrowAltUp
} from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from '../../state/StateProvider';
import WeatherStyles from './Weather.styles';
import Spinner from '../Spinner/Spinner';

export default function Weather() {
  const [{ positionData, weatherData }, dispatch] = useStateValue();

  const getWeather = async () => {
    if (positionData) {
      const { latitude, longitude } = positionData.coords;
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e8789b68bcb8ad13d6b5cf8e42495697`
        )
        .then(weatherResponse => {
          console.log(weatherResponse);
          dispatch({ type: 'setWeather', weatherData: weatherResponse });
        });
      // await axios
      //   .get(
      //     `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=e8789b68bcb8ad13d6b5cf8e42495697`
      //   )
      //   .then(forecastResponse => {
      //     console.log(forecastResponse);
      //     dispatch({ type: 'setForcast', forecastData: forecastResponse });
      //   });
    }
  };

  useEffect(() => {
    if (positionData !== undefined) {
      getWeather();
    }
  }, [positionData]);

  const getFahrenheit = k => {
    return Math.floor(((k - 273.15) * 9) / 5 + 32);
  };

  const getDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const date = new Date();
    return `${date.getDate()} ${months[date.getMonth()]}'${date
      .getFullYear()
      .toString()
      .substring(2)}`;
  };

  const getIcon = weather => {
    const icons = [
      { name: 'Clouds', icon: faCloud },
      { name: 'windy', icon: faWind },
      { name: 'Clear', icon: faSun },
      { name: 'Rain, Drizzle, Thunderstorm', icon: faCloudShowersHeavy },
      { name: 'partly', icon: faCloudSun },
      { name: 'scat', icon: faCloudSunRain },
      { name: 'show', icon: faCloudMoonRain },
      { name: 'Snow', icon: faSnowflake },
      { name: 'Atmosphere', icon: faSmog }
    ];
    const icon = icons.find(iconObject => iconObject.name.indexOf(weather) > -1);
    return icon.icon;
  };

  const getSpeed = speed => {
    return (speed * 2.2369).toFixed(2);
  };

  return (
    <React.Fragment>
      {weatherData ? (
        <WeatherStyles direction={weatherData.data.wind.deg}>
          <div>
            <span className="date">{getDate()}</span>
            <div className="condition__wrapper">
              <span className="condition__temp">
                {`${getFahrenheit(weatherData.data.main.temp)}`}
                &deg;
              </span>
              <div className="condition">
                <FontAwesomeIcon
                  className="condition__icon"
                  icon={getIcon(weatherData.data.weather[0].main)}
                />
                <span className="condition__text">{weatherData.data.weather[0].main}</span>
              </div>
            </div>
          </div>
          <div className="description">
            <span className="description__header">{weatherData.data.name}</span>
            <div className="speed">
              <FontAwesomeIcon className="wind__icon" icon={faLongArrowAltUp} />
              <span className="description__text">
                {`${getSpeed(weatherData.data.wind.speed)} mph`}
              </span>
            </div>
          </div>
        </WeatherStyles>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
}
