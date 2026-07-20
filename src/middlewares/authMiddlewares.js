const jwt = require('jsonwebtoken');


const verifyAppToken = (req, res, next) => {


    const token = req.headers['app-token'];


    if (!token) {

        return res.status(401).json({
            message: "Application token missing"
        });

    }


    try {

        jwt.verify(
            token,
            process.env.APP_TOKEN_SECRET
        );


        next();


    } catch (error) {

        return res.status(401).json({
            message: "Invalid application token"
        });

    }

};


module.exports = {
    verifyAppToken
};