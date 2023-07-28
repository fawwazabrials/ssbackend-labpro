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
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/perusahaanRoutes"));
app.use("/", require("./routes/barangRoutes"));

// Error handler
app.use(errorHandler);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
