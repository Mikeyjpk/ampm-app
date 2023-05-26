import { User, Event } from "@prisma/client";

export type SafeEventInfo = Omit<
    Event, 
    "createdAt"
> & {
    createdAt: string;
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};