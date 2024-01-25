import { Response, NextFunction, Request } from 'express';
import { ctrlWrapper, httpError } from '../../utils';
import { Advert } from '../../models/advert';

const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { advertId: _id } = req.params;

  const result = await Advert.findOne({ _id });

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<Request>(getById);
