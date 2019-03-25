import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { useStateValue } from '../../state/StateProvider';
import MapStyles from './Map.styles';
import Spinner from '../Spinner/Spinner';

export default function Map(props) {
  const [{ positionData }] = useStateValue();
  const MapWrapper = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
  });
  return (
    <MapStyles>
      {positionData ? (
        <MapWrapper
          center={[positionData.coords.longitude, positionData.coords.latitude]}
          zoom={[11]}
          style="mapbox://styles/drum-it/cjtkvwl8003fi1fs7vlyclxi1" // eslint-disable-line
          containerStyle={{
            borderRadius: '5px',
            height: '100%',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <Layer type="symbol" layout={{ 'icon-image': 'marker-11' }}>
            <Feature coordinates={[positionData.coords.longitude, positionData.coords.latitude]} />
          </Layer>
        </MapWrapper>
      ) : (
        <Spinner />
      )}
    </MapStyles>
  );
}
