const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: true,
	})
);

// Routes
app.use("/perusahaan", require("./routes/perusahaanRoutes"));
app.use("/barang", require("./routes/barangRoutes"));

// Error handler
app.use(errorHandler);

app.get("/", (req, res) => {
	res.status(200).send({
		message: "Hello world!",
	});
});

module.exports = app;
