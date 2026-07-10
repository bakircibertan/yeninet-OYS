import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError.js";

export const authorize = (

    ...roles: string[]

) => {

    return (

        req: Request,

        res: Response,

        next: NextFunction

    ) => {

        if (!roles.includes(req.user.role)) {

            throw new ApiError(

                403,

                "Bu işlem için yetkiniz yok."

            );

        }

        next();

    };

};