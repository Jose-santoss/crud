(async() =>
{
    const database = require('./db');
    const produto = require('./produto');

    // o comando sync irá criar a tabela caso ela não exista no banco
    await database.sync();

    await produto.create(
        {
            Nome: "Primeiro teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Segundo teste",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Terceiro teste",
            DataCriacao: Date()
        }
    )
    // alterar produto
    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo 2 Alterado";
    await alterProd.save();
    
    // apagar produto
    produto.destroy({where : { id: 1 }});

    // procurar produto
    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);

})();