import { useState } from 'react';
import type { VehicleTypes } from 'types';

export const useCreateDataArray = (text: VehicleTypes[]) => {
  const [data, setdata] = useState<VehicleTypes[]>(text);

  const changeDataArray = (value: VehicleTypes[]): void => setdata(value);

  const outputDataArray = (): VehicleTypes[] => data;

  return { changeDataArray, outputDataArray };
};
