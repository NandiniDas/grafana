import { DataTransformerID } from './ids';
import { DataFrame, /*FieldType,*/ Field } from '../../types/dataFrame';
import { DataTransformerInfo } from '../../types/transformations';
import { getFieldDisplayName } from '../../field/fieldState';
import { ArrayVector } from '../../vector/ArrayVector';
import { guessFieldTypeForField } from '../../dataframe/processDataFrame';
import { ReducerID } from '../fieldReducer';

export interface ValueFilter {
  type: string;
  fieldName: string | null; // Corresponding field name
  filterExpression: string | null; // The filter expression / value
}

export interface FilterByValueTransformerOptions {
  valueFilters: [ValueFilter];
}

export const filterByValueTransformer: DataTransformerInfo<FilterByValueTransformerOptions> = {
  id: DataTransformerID.filterByValue,
  name: 'Filter by Value',
  description: 'Filter the data points (rows) depending on the value of certain fields',
  defaultOptions: {
    valueFilters: [{ type: 'include', fieldName: null, filterExpression: null }],
  },

  /**
   * Return a modified copy of the series.  If the transform is not or should not
   * be applied, just return the input series
   */
  transformer: (options: FilterByValueTransformerOptions) => {
    console.log('options:', options);
    // const calculationsByField = options.calculationsByField; //.map((val, index) => ({fieldName: val[0], calculations: val[1]}));

    return (data: DataFrame[]) => {
      // For each frame
      // For each row
      // For each filter
      // Include or exclude row ?

      return data;
    };
  },
};
