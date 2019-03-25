import React from 'react';
import SpinnerStyles from './Spinner.styles';
import loadingIcon from '../../assets/svg-loaders/puff.svg';

export default function Spinner() {
  return (
    <SpinnerStyles>
      <img className="spinner__image" src={loadingIcon} alt="" />
    </SpinnerStyles>
  );
}
