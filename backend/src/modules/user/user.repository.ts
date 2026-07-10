import prisma from "../../database/prisma.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

export const create = async (data: CreateUserDto) => {

    const user = await prisma.user.create({
        data,
    });

    return user;

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