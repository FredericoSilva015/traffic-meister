import { Autocomplete, TextField } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useDataArray } from 'hooks/use-data-array';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const Form = (): JSX.Element => {
  const mainData = useSelector((state: RootState) => state.data.value);
  const dataState = useDataArray(mainData);

  const autoCompleteStyles = {
    width: 500,
    margin: '10px 0',
  };

  return (
    <Box sx={{ alignSelf: 'baseline' }}>
      <Autocomplete
        options={dataState.outputType()}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => {
          dataState.setFilter('type', inputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Select Type" />}
      />
      <Autocomplete
        options={dataState.outputBrand()}
        filterOptions={(x) => x}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => dataState.setFilter('brand', inputValue)}
        renderInput={(params) => <TextField {...params} label="Select Brand" />}
      />
      <Autocomplete
        options={dataState.outputColor()}
        filterOptions={(x) => x}
        sx={autoCompleteStyles}
        onChange={(e, inputValue) => dataState.setFilter('colors', inputValue)}
        renderInput={(params) => <TextField {...params} label="Select Color" />}
      />
    </Box>
  );
};
