import express from 'express'
import bodyParser from 'body-parser'
import ProdutosRoutes from './server/routes/ProdutosRoutes';
import PedidosRoutes from './server/routes/PedidosRoutes';
import ItemRoutes from './server/routes/ItemRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/produtos', ProdutosRoutes);
app.use('/api/pedidos', PedidosRoutes);
app.use('/api/item', ItemRoutes);

// quando recebe uma rota não listada
app.get('*', (req, res) => res.status(200).send({
    message: 'Boas-vindas à API!',
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

module.exports = app