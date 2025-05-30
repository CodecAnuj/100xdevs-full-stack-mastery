"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ["info", "query"],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.user.findMany({
            where: {
                email: {
                    endsWith: "gmail.com",
                },
                posts: {
                    // has atleast one post published
                    some: {
                        published: true,
                    },
                },
            },
            include: {
                posts: {
                    where: {
                        published: true,
                    },
                },
            },
        });
        console.log(res);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done with the query");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
