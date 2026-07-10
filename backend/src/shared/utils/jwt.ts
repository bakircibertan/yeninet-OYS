import jwt from "jsonwebtoken";

export const generateAccessToken = (
    userId: number,
    role: string
) => {

    return jwt.sign(
        {
            id: userId,
            role,
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "15m",
        }
    );

};

export const generateRefreshToken = (
    userId: number
) => {

    return jwt.sign(
        {
            id: userId,
        },
        process.env.JWT_REFRESH_SECRET as string,
        {
            expiresIn: "7d",
        }
    );

};