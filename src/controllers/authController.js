const asyncHandler = require("express-async-handler");
const createError = require("../utils/createError");
const authService = require("../services/authService");

// @desc Login using a hardcoded admin account
// @route POST /login
// @request
//    { username: string
//      password: string }
// @access public
const login = (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		throw createError("400", "Request must include username and password");
	}
	const { user, token } = authService.login(username, password);
	res.cookie("token", token, {
		httpOnly: true,
	})
		.status(200)
		.send({
			status: "success",
			message: "Logged in",
			data: {
				user,
				token,
			},
		});
};

// @desc Fetch current logged in user information
// @route GET /self
// @access private
const self = (req, res) => {
	const { username, name } = req;
	authService.self(username, name); // verify request
	res.status(200).send({
		status: "success",
		message: "Fetched current user information",
		data: {
			username,
			name,
		},
	});
};

module.exports = { login, self };
