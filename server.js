var express = require("express");
var api = require("./api");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const port = process.env.PORT || process.env.IP || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Conectando al api!' });
});

app.get('/api/news/:news_id', function (req, res) {
    let news = api.news(req.params.news_id);

    news.then( (result) => {
        console.log('Obteniendo noticia con id: '+ req.params.news_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

app.get('/api/categories/', function (req, res) {
    let categories = api.categories();

    categories.then( (result) => {
        console.log('Obteniendo categorias\nCantidad de Resultados:' +result.length);
        res.status(200).json(result);
    });
});

app.get('/api/categories/:category_id', function (req, res) {
    let categories = api.categories(req.params.category_id);

    categories.then( (result) => {
        console.log('Obteniendo categorias con id: '+ req.params.category_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

app.get('/', (req, res) => {
   res.sendFile(__dirname+'/public/index.html');
}).listen(port);

app.use('/assets', express.static(path.join(__dirname,'/node_modules')));
app.use('/assets', express.static(path.join(__dirname + '/public','/assets')));
app.use('/api', router);

console.log('Express server started on port %s', port);
