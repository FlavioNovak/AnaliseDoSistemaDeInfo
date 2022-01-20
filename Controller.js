const express = require ('express');
const cors = require ('cors');

const models=require('./models');

const app=express();
app.use(cors());

let cliente= models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/', function(req,res){
    res.send('Olá, mundo!')
});

app.get('/servicos', async(req,res)=>{
    await servico.create({
        nome: "Nodejs",
        descricao: "Desenvolvimento de aplicação back-end",
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send('Serviço criado com sucesso!');
});

app.get('/clientes', async(req,res)=>{
    await cliente.create({
        nome: "Flavio Novak",
        endereco: "Rua Peru 727 Jd. Alvorada",
        cidade: "Maringá",
        uf: "Paraná",
        nascimento: 19990808,
        clienteDesde: 2022-01-19
    });
    res.send('Cliente cadastrado com sucesso!')
});

let port=process.env.PORT || 3001; // back-end, 3000 front-end

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})
