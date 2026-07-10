import { NextFunction, Request, Response } from "express";
import * as userService from "./user.service.js";

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const result = await userService.register(req.body);

        res.status(201).json(result);

    } catch (error) {

        next(error);

    }

};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const result = await userService.login(req.body);

        res.status(200).json(result);

    } catch (error) {

        next(error);

    }

};