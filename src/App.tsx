import './styles/App.css';
import { Form } from './components';
import { useSelector } from 'react-redux';
import { Puff } from 'svg-loaders-react';
import { Box } from '@material-ui/system';
import type { RootState } from 'redux/store';

function App(): JSX.Element {
  const mainData = useSelector((state: RootState) => state.data.value);

  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {mainData.length && mainData ? <Form /> : <Puff stroke="#98ff98" />}
        </Box>
      </header>
    </div>
  );
}

export default App;
