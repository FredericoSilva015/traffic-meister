import { createSlice } from '@reduxjs/toolkit';
import type { VehicleTypes } from 'types';
import type { AppDispatch } from './store';

// @ts-ignore
import trafficMeister from 'service';

interface StateInterface {
  value: VehicleTypes[];
}

interface ActionInterface {
  payload: VehicleTypes[] | null;
}

const initialState: StateInterface = {
  value: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action: ActionInterface) => {
      if (action.payload === null) return;
      state.value = action.payload;
    },
  },
});

export const incrementAsync = () => async (dispatch: AppDispatch) => {
  const amount: Promise<VehicleTypes[] | null> = new Promise((resolve) => {
    // @ts-ignore
    trafficMeister.fetchData((err: Error, data: VehicleTypes[] | null) =>
      resolve(data)
    );
  });

  amount.then((resp) => resp);
  dispatch(updateData(await amount));
};

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
