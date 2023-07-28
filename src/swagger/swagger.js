const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
	"../routes/authRoutes.js",
	"../routes/barangRoutes.js",
	"../routes/perusahaanRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
