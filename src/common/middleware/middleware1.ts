import { NextFunction } from "express";

export function Middleware1(req: Request,res: Response,next: NextFunction){
   console.log("Middleware1");
   next();
}