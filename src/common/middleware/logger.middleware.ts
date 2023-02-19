export function logger(req, res, next) {
    console.log(req.originalUrl)
    console.log(`Request...`);
    next();
};