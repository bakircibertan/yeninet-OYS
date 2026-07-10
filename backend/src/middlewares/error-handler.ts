import { NextFunction, Request, Response } from "express";
import { ApiError } from "../shared/errors/ApiError.js";

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.error(error);

    if (error instanceof ApiError) {

        return res.status(error.statusCode).json({

            success: false,

            message: error.message,

        });

    }

    return res.status(500).json({

        success: false,

        message: "Sunucuda beklenmeyen bir hata oluştu.",

    });

};