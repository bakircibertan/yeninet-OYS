import { z } from "zod";

export const createOltSchema = z.object({

    name: z.string(),

    ip: z.string(),

    port: z.number(),

    username: z.string(),

    password: z.string(),

    brand: z.string(),

});


export const updateOltSchema = z.object({

    name: z.string(),

    ip: z.string(),

    port: z.number(),

    username: z.string(),

    password: z.string(),

    brand: z.string(),

});