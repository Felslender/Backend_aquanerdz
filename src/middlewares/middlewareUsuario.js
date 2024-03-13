const connection = require('../models/connection');


const validateEmail = async(req, res, next) => {

    try{
        const {email} = req.body;

        const queryEmail = 'SELECT email FROM usuarios WHERE email = ?;'

        const [findEmail] = await connection.execute(queryEmail, [email]);
        if(findEmail.length == 1) {
            return res.status(401).json({msg: "Email ja cadastrado, por favor, utilize outros!"})
        };

        next();
    }catch(error){
        return res.status(500).json({msg: "erro na validação do email"});
    }
};


module.exports = {
validateEmail,


}