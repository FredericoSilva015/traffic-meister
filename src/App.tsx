import './styles/App.css';
import { Form } from './components';
import { useSelector } from 'react-redux';
import { Puff } from 'svg-loaders-react';
import { Box } from '@material-ui/system';
import { FaTrafficLight } from 'react-icons/fa';
import type { RootState } from 'redux/store';

function App(): JSX.Element {
  const mainData = useSelector((state: RootState) => state.data.value);

  const outerWrapper = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(90deg, rgba(217,65,15,1) 32%, rgba(255,115,0,1) 100%)',
  };

  const innerWrapper = {
    padding: 5,
    border: '1px solid #fff',
    background: '#fff',
    borderRadius: 3,
    boxShadow: '7px 5px 10px -1px rgba(0,0,0,0.5)',
  };

  const titleStyle = {
    marginTop: 0,
    fontSize: 38,
    color: 'rgb(25, 118, 210)',
    fontWeight: 'bold',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={outerWrapper}>
          {mainData.length && mainData ? (
            <Box sx={innerWrapper} className="animation">
              <h1 style={titleStyle}>
                Traffic Meister <FaTrafficLight />
              </h1>

              <Form />
            </Box>
          ) : (
            <Puff />
          )}
        </Box>
      </header>
    </div>
  );
}

export default App;
