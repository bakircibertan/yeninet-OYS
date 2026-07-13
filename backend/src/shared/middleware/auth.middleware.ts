import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../errors/ApiError.js";
import { JwtPayload } from "../types/jwt-payload.js";

export const auth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const authorization = req.headers.authorization;
    console.log("Authorization:", authorization);

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

    console.log("Decoded:", decoded);

    req.user = decoded as JwtPayload;

    next();

} catch (error) {

    console.log(error);

    throw new ApiError(
        401,
        "Geçersiz veya süresi dolmuş token."
    );

}

};