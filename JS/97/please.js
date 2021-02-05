
module.exports = (req, res, next) => {
    if (req.query.magicword === "please") {
        return next();

    }
    res.statusCode=400;
    next(new Error('<h1>OOPS magic word required!!!!</h1>'));
}