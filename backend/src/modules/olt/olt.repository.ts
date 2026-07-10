import prisma from "../../database/prisma.js";
import { CreateOltDto } from "./dto/create-olt.dto.js";



export const create = async (data: CreateOltDto) => {
    const olt = await prisma.olt.create({
        data,
    });

    return olt;
};

export const findAll = async () => {

    const olts = await prisma.olt.findMany();

    return olts;

};


export const update = async (
    id: number,
    data: CreateOltDto
) => {

    const olt = await prisma.olt.update({
        where: {
            id,
        },
        data,
    });

    return olt;

};

export const deleteById = async (id: number) => {

    const olt = await prisma.olt.delete({
        where: {
            id,
        },
    });

    return olt;

};


