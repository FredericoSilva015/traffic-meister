import { Autocomplete, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useDataArray } from 'hooks/use-data-array';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const Form = (): JSX.Element => {
  const mainData = useSelector((state: RootState) => state.data.value);
  const dataState = useDataArray(mainData);

  const autoCompleteStyles = {
    maxWidth: 500,
    minWidth: 220,
    width: '100%',
    height: '100%',
    margin: '10px 0',
  };

  const result = {
    border: '1px solid rgb(25, 118, 210)',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: 1,
  };

  const resultSpan = { color: 'rgb(25, 118, 210)', fontWeight: 'bold' };

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

      <Typography component="p" sx={result}>
        Type:{' '}
        <span style={resultSpan}>{dataState.outputFilterValues().type}</span>
      </Typography>
      <Typography component="p" sx={result}>
        Brand:{' '}
        <span style={resultSpan}>{dataState.outputFilterValues().brand}</span>
      </Typography>
      <Typography component="p" sx={{ ...result, ...{ marginBottom: 0 } }}>
        Colors:{' '}
        <span style={resultSpan}>{dataState.outputFilterValues().colors}</span>
      </Typography>
    </Box>
  );
};
