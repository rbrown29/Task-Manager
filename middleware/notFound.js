// Override the default 404 error handler
const notFound = (req, res) => {
    res.status(404).send('Route does not exist')
}

module.exports = notFound