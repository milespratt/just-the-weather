import React, { useEffect } from 'react';
import { useStateValue } from '../../state/StateProvider';
import PositionStyles from './Position.styles';

export default function Position() {
  const [{ positionData }, dispatch] = useStateValue();

  const getPosition = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(positionResponse => {
        console.log(positionResponse);
        dispatch({ type: 'setPosition', positionData: positionResponse });
      });
    }
  };

  useEffect(() => {
    if (positionData === undefined) {
      getPosition();
    }
  });

  return (
    <PositionStyles>
      <button className="control" type="button" onClick={getPosition}>
        Get Position
      </button>
    </PositionStyles>
  );
}
