// Override the default error handler middleware
const { apiError } = require('../errors/errors');
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof apiError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware;