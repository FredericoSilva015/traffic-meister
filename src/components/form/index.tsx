import { Autocomplete, TextField } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useDataArray } from 'hooks/use-data-array';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const Form = (): JSX.Element => {
  const mainData = useSelector((state: RootState) => state.data.value);
  const dataState = useDataArray(mainData);
  // const filteredValues = dataState.outputFilterValues();

  const autoCompleteStyles = {
    maxWidth: 500,
    minWidth: 320,
    margin: '10px 0',
  };

  const result = {
    border: '1px solid rgb(25, 118, 210)',
    padding: 10,
    borderRadius: 4,
  };

  return (
    <Box sx={{ alignSelf: 'baseline' }}>
      <Autocomplete
        options={dataState.optionsType()}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => {
          dataState.setFilter('type', inputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Select Type" />}
      />
      <Autocomplete
        options={dataState.optionsBrand()}
        filterOptions={(x) => x}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => dataState.setFilter('brand', inputValue)}
        renderInput={(params) => <TextField {...params} label="Select Brand" />}
      />
      <Autocomplete
        options={dataState.optionsColor()}
        filterOptions={(x) => x}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => dataState.setFilter('colors', inputValue)}
        renderInput={(params) => <TextField {...params} label="Select Color" />}
      />

      <p style={result}>
        Type:{' '}
        <span style={{ color: 'rgb(25, 118, 210)', fontWeight: 'bold' }}>
          {dataState.outputFilterValues().type}
        </span>
      </p>
      <p style={result}>
        Brand:{' '}
        <span style={{ color: 'rgb(25, 118, 210)' }}>
          {dataState.outputFilterValues().brand}
        </span>
      </p>
      <p style={{ ...result, ...{ marginBottom: 0 } }}>
        Colors:{' '}
        <span style={{ color: 'rgb(25, 118, 210)', fontWeight: 'bold' }}>
          {dataState.outputFilterValues().colors}
        </span>
      </p>
    </Box>
  );
};
