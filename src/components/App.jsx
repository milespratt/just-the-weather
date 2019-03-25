import React from 'react';
import AppStyles from './App.styles';

import StateProvider from '../state/StateProvider';

import Weather from './Weather/Weather';
import Position from './Position/Position';
import Map from './Map/Map';

const App = () => {
  const initialState = {
    weatherData: undefined,
    positionData: undefined
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setPosition':
        return {
          ...state,
          positionData: action.positionData
        };
      case 'setWeather':
        return {
          ...state,
          weatherData: action.weatherData
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppStyles colorOne="--hotOne" colorTwo="--hotTwo">
        <Position />
        {/* <Map /> */}
        <Weather />
      </AppStyles>
    </StateProvider>
  );
};

export default App;
