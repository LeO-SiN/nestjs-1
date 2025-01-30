import { NextFunction } from 'express';

export function Middleware1(req: Request, res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] REQ => ${req.method}, ${req.url}`);
  next();
}
