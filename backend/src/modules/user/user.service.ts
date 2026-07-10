import { CreateUserDto } from "./dto/create-user.dto.js";
import * as userRepository from "./user.repository.js";

export const register = async (
    data: CreateUserDto
) => {

    const user = await userRepository.create(data);

    return {
        success: true,
        message: "Kullanıcı başarıyla oluşturuldu.",
        data: user,
    };

};

export const login = async (data: any) => {

    return {
        success: true,
        message: "Giriş başarılı."
    };

};