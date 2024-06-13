import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    logs: ["query"]
})

export default prisma;