const jwt = require('jsonwebtoken');
const User = require('./model/userModel');

exports.verifyUser = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err = new Error("Bearer token is not set!");
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    console.log(token);
    let data;
    try {
        data = jwt.verify(token, process.env.TOKEN);
        console.log(data)
    } catch (err) {
        throw new Error('No token! Please Login First.');
    }
    User.findById(data._id)
        .then((user) => {
            req.user = user;
            next();
        }).catch(err=>res.send(err))
}

exports.verifyAdmin = (req, res, next) => {
    if (!req.user) {
        let err = new Error('Unauthorized');
        err.status = 401;
        return next(err);
    }
    if (req.user.user_type !== "admin") {
        let err = new Error('Forbidden');
        err.status = 403;
        return next(err);
    }
    next();
}
