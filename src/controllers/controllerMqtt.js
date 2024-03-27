const teste = async (req, res) => {
    try {
        
        const { valor } = req.body;
        console.log(valor);

        

        if(!valor){
            return res.status(404).json({message: 'valor de corpo errado'});
        }
        
        return res.status(200).json({ message: "Valor recebido com sucesso", valor });
    } catch (error) {
        
        console.error(error);
        return res.status(500).json({ error: "Ocorreu um erro ao processar a requisição" });
    }
}


const testeGet = (req, res) => {
    try {
        return res.status(200).json({res: "deu certo!!!"});
    } catch (error) {
        return res.status(500).json({ message: "Ocorreu um erro"})
    }
}


module.exports = {
    teste,
    testeGet
}