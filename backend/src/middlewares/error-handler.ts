import { NextFunction, Request, Response } from "express";

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.error(error);

    return res.status(500).json({
        success: false,
        message: "Sunucuda beklenmeyen bir hata oluştu."
    });

};