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
        nascimento: "1999-08-08",
        clienteDesde: "2022-01-20"
    });
    res.send('Cliente cadastrado com sucesso!')
});

app.get('/pedidos', async(req,res)=>{
    await pedido.create({
        dataPedido: "2022-01-20",
        ClienteId: 1
    });
    res.send('Pedido feito com sucesso!')
});

app.get('/itempedidos', async(req,res)=>{
    await itempedido.create({
        quantidade: 1,
        valor: 350.00,
        ServicoId: 2,
        PedidoId: 2
    });
    res.send('Pedido feito com sucesso!')
});


let port=process.env.PORT || 3001; // back-end, 3000 front-end

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})
