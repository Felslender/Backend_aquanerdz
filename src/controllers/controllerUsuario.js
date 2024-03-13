const models = require('../models/modelUsuario');


const createUsuario = async (req, res) => {

    
        const createdUsuario = await models.createUsuario(req.body);
        return res.status(201).json(createdUsuario);

    
}




module.exports = {
createUsuario,


}