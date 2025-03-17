import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE: z.string().url(),
    NEXT_PUBLIC_ANALYTICS_ID: z.string().optional()
});

export const validatedEnv = envSchema.parse({
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID
});