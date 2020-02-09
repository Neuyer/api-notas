const Adm = require('../models/ADMSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async signIn(req, res) {
        const { nome, login, pswd } = req.body;
        const adm = await Adm.findOne({'login': login });

        if (adm) {
            res.status(409);
            return res.json('Login já existente!');
        }

        try {
            // o bcrypt entende q o 10 como numero de rodadas do gensalt
            const hashedPswd = await bcrypt.hash(pswd, 10);
            newAdm = await Adm.create({
                nome,
                login,
                pswd: hashedPswd
            });
            const token = jwt.sign({ id: newAdm._id }, process.env.secret, {
                expiresIn: 600
            });

            res.status(201).send({ auth: true, token: token });
            return res.json(newAdm.nome + ' seu login é: ' + newAdm.login)
        } catch (error) {
            console.log(error);
            res.status(500);
        }

    },
    async logIn(req, res) {
        console.log('olha o login')
        const { login, pswd } = req.body;
        console.log(login, pswd)
        const adm = await Adm.findOne({ "login": login });

        try {
            const pswdValid = await bcrypt.compare(pswd, adm.pswd);
            if (pswdValid) {
                const token = jwt.sign({ id: adm._id }, process.env.secret, {
                    expiresIn: 6000
                });
                return res.status(200).send({ auth: true, token });
            } else {
                res.status(400).send({ auth: false, token: null });
                return res.json("senha ou login inválidos");
            }
        } catch (error) {
            res.status(400);
            return res.json("senha ou login inválidos");
        }
    },
}