const connection = require('./connection');
const bcrypt = require('bcrypt');


class usuario {
    constructor(nome, email, senha, telefone){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }
};



const createUsuario = async(infUsuario) => {

    const {nome, email, senha, telefone} = infUsuario;

    const query = 'INSERT INTO usuarios(idCargo, nome, email, senha, telefone) values (2 ,?, ?, ?, ?);'


    const newUsuario = new usuario(nome, email, senha, telefone);

    const salt = await bcrypt.genSalt(12)
    const SenhaHash = await bcrypt.hash(senha,salt)

    

    const [createUsuario] = await connection.execute(query, [newUsuario.nome, newUsuario.email, SenhaHash, newUsuario.telefone])

    return createUsuario;
};








module.exports = {
createUsuario,

}