const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    
    res.json({
        status: "error",
        message: err.message
    });

    console.error(err);
};

module.exports = errorHandler;