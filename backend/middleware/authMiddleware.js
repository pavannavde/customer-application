const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        console.log(req.session.isAuth)
        next();
    } else {
        res.json({ message: "You are not authorized ,please login" });
    }
}

 module.exports = { isAuth };