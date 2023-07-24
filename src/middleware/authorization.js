const createError = require("../utils/createError");
const { verifyJWTToken } = require("../services/authService");

const authorization = (req, res, next) => {
	const token =
		req.cookies.token ||
		req.headers.Authorization ||
		req.headers.authorization;
	if (!token) {
		throw createError(403, "You don't have permission to access this");
	}

	if (token == env("MONOLITH_TOKEN")) {
		req.username = result.username;
        req.name = result.name;
        next();
	}

	try {
		const result = verifyJWTToken(token);
        req.username = result.username;
        req.name = result.name;
        next();
	} catch (e) {
		throw e;
	}
};

module.exports = authorization
