const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");
const { getAdmin } = require("../repository/adminRepository");

const admin = {
	username: "admin",
	name: "Admin Nih Gan",
	password: "admin"
}

const verifyAdminCredentials = (username, password) => {
	return username == admin.username && password == admin.password;
};

const verifyAdmin = (username, name) => {
    return username == admin.username && name == admin.name;
}

const verifyJWTToken = (token) => {
	try {
		const result = jwt.verify(token, process.env.JWT_SECRET);
		return result;
	} catch {
		throw createError(403, "You don't have permission to access this");
	}
};

const login = (username, password) => {
	console.log(admin)

	if (!verifyAdminCredentials(username, password)) {
		throw createError(401, "Wrong username or password");
	}
	const token = jwt.sign(
		{
			username: admin.username,
			name: admin.name,
		},
		process.env.JWT_SECRET
	);

	return {
		user: {
			username: admin.username,
			nama: admin.nama,
		},
		token,
	};
};

const self = (username, name) => {
	if (!verifyAdmin(username, name)) {
		throw createError(403, "You don't have permission to access this");
    }
    return;
};

module.exports = { login, self, verifyJWTToken };
