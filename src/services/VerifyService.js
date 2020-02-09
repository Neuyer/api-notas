const jwt = require('jsonwebtoken');

module.exports = {
    verify(req, res, next) {
        console.log('olha a req')
        const token = req.headers['x-access-token'];
        console.log( token)
        if (!token) return res.status(401).send({ auth: false, message: 'Sem token.' });
        // decoded é o resultado do jwt.verify
        jwt.verify(token, process.env.secret, (err, decoded) => {
            if (err) return res.status(403).send({ auth: false, message: 'falha ao autenticar o token.' });

            req.body.admId = decoded.id;
            next();
        });
    }
}