import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../errors/ApiError.js";

export const auth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const authorization = req.headers.authorization;

    if (!authorization) {

        throw new ApiError(
            401,
            "Token bulunamadı."
        );

    }

    const token = authorization.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        req.user = decoded as {
            id: number;
            role: string;
        };

        next();

    } catch {

        throw new ApiError(
            401,
            "Geçersiz veya süresi dolmuş token."
        );

    }

};