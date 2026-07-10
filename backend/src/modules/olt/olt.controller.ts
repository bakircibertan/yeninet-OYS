import { NextFunction, Request, Response } from "express";

import * as oltService from "./olt.service.js";


type OltParams = {
    id: string;
};

export const getAllOlts = async (
    req: Request,
    res: Response
) => {

    const result = await oltService.getAllOlts();

    res.json(result);

};

export const createOlt = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const result = await oltService.createOlt(req.body);

        res.status(201).json(result);

    } catch (error) {

        next(error);

    }
};



export const updateOlt = async (
    req: Request<OltParams>,
    res: Response
) => {

    const result = await oltService.updateOlt(
        req.params.id,
        req.body
    );

    res.json(result);

};

export const deleteOlt = async (
    req: Request<OltParams>,
    res: Response
) => {

    const result = await oltService.deleteOlt(
        req.params.id
    );

    res.json(result);

};