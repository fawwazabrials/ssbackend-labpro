import prisma from '../../lib/db';

module.exports = Object.freeze({
    getAdmin: async () => prisma.admin.findFirst()
})