import styled from 'styled-components';

const WeatherStyles = styled.div`
  border-radius: 10px;
  background: white;
  /* background-image: url('https://source.unsplash.com/800x800/?sunny'); */
  background-size: cover;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  color: black;
  flex-grow: 0;
  flex: 0;
  padding: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  width: 300px;
  .date {
    font-size: 0.85rem;
  }
  .condition__wrapper {
    display: flex;
    justify-content: space-between;
  }
  .condition__temp {
    font-size: 3rem;
    font-weight: bold;
  }
  .condition {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 3rem;
    justify-content: flex-end;
  }
  .condition__icon {
    margin-bottom: 5px;
  }
  .condition__text {
  }
  .description {
    display: flex;
    flex-direction: column;
  }
  .description__header {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .description__text {
    font-weight: 300;
    font-size: 0.9rem;
  }
  .speed {
    display: flex;
    align-items: center;
  }
  .wind__icon {
    transform: rotateZ(${props => props.direction}deg);
    margin-right: 10px;
  }
`;

export default WeatherStyles;
