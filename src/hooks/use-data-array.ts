import { useEffect, useState } from 'react';
import type { VehicleTypes } from 'types';

export const useDataArray = (mainData: VehicleTypes[]) => {
  const [data, setData] = useState<VehicleTypes[]>(mainData);
  const [brand, setBrand] = useState<string | null>(null);
  const [colors, setColors] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    let filteredData = mainData;

    if (type !== null)
      filteredData = filteredData.filter((item) => item.type === type);

    if (brand !== null)
      filteredData = filteredData.filter((item) => item.brand === brand);

    if (colors !== null)
      filteredData = filteredData.filter((item) => {
        const testValue = item.colors.find(
          (arrayValue) => arrayValue === colors
        );
        return testValue !== undefined;
      });

    setData(filteredData);
  }, [brand, colors, type, mainData]);

  const outputBrand = (): string[] => data.map((value) => value.brand);
  const outputType = (): string[] => {
    const typesArray: string[] = data.map((value) => value.type);

    // typescript shenanigans...
    // this should be correct `[...new Set(typesArray)]`, Set has iterator properties
    // there is another way, but it will add 21 more lines of boilerplate in every file
    // reference: https://stackoverflow.com/questions/33464504/using-spread-syntax-and-new-set-with-typescript
    const filteredArray = [...Array.from(new Set(typesArray))];
    return filteredArray;
  };

  const outputColor = (): string[] => {
    const colorArray = data.map((value) => value.colors);
    const filteredArray = [...Array.from(new Set(colorArray.flat()))];
    return filteredArray;
  };

  const setFilter = (
    filterType: 'brand' | 'colors' | 'type',
    filterValue: string | null
  ) => {
    switch (filterType) {
      case 'brand':
        setBrand(filterValue);
        break;

      case 'colors':
        setColors(filterValue);
        break;

      case 'type':
        setType(filterValue);
        break;

      default:
        throw new Error('Invalid filter');
    }
  };

  return {
    outputBrand,
    outputType,
    outputColor,
    setFilter,
  };
};
