import { z } from "zod";
import { Role } from "../../../generated/prisma/enums.js"

export const registerSchema = z.object({

    name: z.string(),

    email: z.email(),

    password: z.string().min(6),

});


export const loginSchema = z.object({

    email: z.string().email(),

    password: z.string().min(6),

});

export const refreshTokenSchema = z.object({

    refreshToken: z.string(),

});




export const updateUserRoleSchema = z.object({

    role: z.enum([
        Role.ADMIN,
        Role.TECHNICIAN
    ])

});