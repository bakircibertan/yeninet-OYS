import { CreateUserDto } from "./dto/create-user.dto.js";
import * as userRepository from "./user.repository.js";
import bcrypt from "bcrypt";
import { LoginUserDto } from "./dto/login-user.dto.js";

import { ApiError } from "../../shared/errors/ApiError.js";
import {
    generateAccessToken,
    generateRefreshToken
} from "../../shared/utils/jwt.js";

import jwt from "jsonwebtoken";


export const register = async (
    data: CreateUserDto
) => {

    const hashedPassword = await bcrypt.hash(
        data.password,
        10
    );

    const user = await userRepository.create({

        ...data,

        password: hashedPassword

    });

    const { password, ...userWithoutPassword } = user;

    return {

        success: true,

        message: "Kullanıcı başarıyla oluşturuldu.",

        data: userWithoutPassword

    };

};

export const login = async (
    data: LoginUserDto
) => {

    const user = await userRepository.findByEmail(
        data.email
    );

    if (!user) {

        throw new ApiError(
            401,
            "Email veya şifre hatalı."
        );

    }

    const isPasswordCorrect = await bcrypt.compare(
        data.password,
        user.password
    );

    if (!isPasswordCorrect) {

        throw new ApiError(
            401,
            "Email veya şifre hatalı."
        );

    }

    const accessToken = generateAccessToken(
        user.id,
        user.role
    );

    const refreshToken = generateRefreshToken(
        user.id
    );

    return {

        success: true,

        message: "Giriş başarılı.",

        accessToken,

        refreshToken,

    };

};