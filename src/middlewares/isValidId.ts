import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import { httpError } from '../utils';

const isValidId = (req: Request, res: Response, next: NextFunction): void => {
  const { advertId } = req.params;
  if (!isValidObjectId(advertId)) {
    return next(
      httpError({ status: 404, message: `${advertId} is not valid id` })
    );
  }

  next();
};

export default isValidId;
