import { CreateOltDto } from "./dto/create-olt.dto.js";
import * as oltRepository from "./olt.repository.js";


export const getAllOlts = async () => {

    const olts = await oltRepository.findAll();

    return {
        success: true,
        data: olts
    };

};

export const createOlt = async (
    data: CreateOltDto
) => {

    const olt = await oltRepository.create(data);

    return {
        success: true,
        message: "OLT başarıyla oluşturuldu.",
        data: olt,
    };

};

export const updateOlt = async (
    id: string,
    data: CreateOltDto
) => {

    const olt = await oltRepository.update(
        Number(id),
        data
    );

    return {
        success: true,
        message: "OLT güncellendi.",
        data: olt
    };

};

export const deleteOlt = async (id: string) => {

    const olt = await oltRepository.deleteById(
        Number(id)
    );

    return {
        success: true,
        message: "OLT başarıyla silindi.",
        data: olt,
    };

};