

const teste = async (req, res) => {
    try {
        // Extrai o valor do corpo da requisição
        const { valor } = req.body;
        console.log(valor);

        // Aqui você pode fazer o que desejar com o valor, como salvar em um banco de dados, processar, etc.

        if(!valor){
            return res.status(404).json({message: 'valor de corpo errado'});
        }
        // Retorna uma resposta de sucesso com o valor recebido
        return res.status(200).json({ message: "Valor recebido com sucesso", valor });
    } catch (error) {
        // Se ocorrer algum erro, retorna uma resposta de erro
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