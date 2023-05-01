// create a custom error class that extends the Error class
class apiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createApiError = (msg, statusCode) => {
    return new apiError(msg, statusCode);
}

module.exports = {
    createApiError,
    apiError
}