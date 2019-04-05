const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // const token = req.headers.authorization;
        const decoded = jwt.verify(req.headers.authorization, 'secret');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};