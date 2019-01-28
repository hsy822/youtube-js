import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'DeTube'
    res.locals.routes = routes
    next()
}