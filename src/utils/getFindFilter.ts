import { IFindFilterProps, IFindFilter } from '../types/types';

const getFindFilter = (query: IFindFilterProps): IFindFilter => {
  const { page = 1, limit = 10 } = query;
  const skip = (Number(page) - 1) * Number(limit);

  return { skip, limit: Number(limit) };
};

export default getFindFilter;
