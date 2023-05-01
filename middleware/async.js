// This is a middleware function that will wrap each controller function in a try catch block.
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (err) {
            next(err)
        }
    }
};

module.exports = asyncWrapper;
