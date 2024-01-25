import { NextFunction, Response, Request } from 'express';
import { ctrlWrapper, getFindFilter } from '../../utils';
import { Advert } from '../../models/advert';

const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { skip, limit } = getFindFilter(req.query);
  const result = await Advert.find({}, '', {
    skip,
    limit,
  });
  const count = await Advert.find({}).countDocuments();

  res.status(200).json({
    adverts: result,
    count,
  });
};

export default ctrlWrapper<Request>(getAll);
