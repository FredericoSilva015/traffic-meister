import './styles/App.css';
import { useExample } from './hooks/useExample';
import { TextField } from '@material-ui/core';
import type { ChangeEvent } from 'react';

function App(): JSX.Element {
  const example = useExample('Default Value');

  return (
    <div className="App">
      <header className="App-header">
        <p>{example.outputExample()}</p>
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
          onChange={(message: ChangeEvent<HTMLInputElement>) =>
            example.changeExample(message.currentTarget.value)
          }
        />
      </header>
    </div>
  );
}

export default App;
