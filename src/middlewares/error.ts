import { NextFunction, Request, Response } from 'express';

export const handleError = (error: any, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).json({ message, status });
}


export const notFound = (request: Request, response: Response, next: NextFunction) => {
  const error: any = new Error('Not found');
  error.status = 404;
  next(error);
}