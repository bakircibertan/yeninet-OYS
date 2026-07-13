import prisma from "../../database/prisma.js";
import { Role } from "../../generated/prisma/enums.js";
import { CreateUserDto } from "./dto/create-user.dto.js";


export const create = async (
    data: CreateUserDto
) => {

    return await prisma.user.create({

        data: {

            ...data,

            role: Role.TECHNICIAN,

        },

    });

};


export const findByEmail = async (email: string) => {

    return await prisma.user.findUnique({
        where: {
            email,
        },
    });

};

export const findById = async (
    id: number
) => {

    return await prisma.user.findUnique({
        where: {
            id,
        },
    });

};

export const updateRole = async (

    id: number,

    role: Role

) => {

    return await prisma.user.update({

        where: {
            id,
        },

        data: {
            role,
        },

    });

};