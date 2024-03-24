const models = require('../models/modelUser');


const createdUser = async (req, res) => {

        const createdUsuario = await models.createUser(req.body);
        return res.status(201).json(createdUsuario);

}




module.exports = {
createdUser,


}