const prisma = require("../../prisma/db");

module.exports = Object.freeze({
    getAdmin: async () => prisma.admin.findFirst()
})