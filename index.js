const app = require('./config/server');

const rotaAuth = require('./controllers/routes/auth')(app);
const rotaRefresh = require('./controllers/routes/refresh')(app);
const rotaAccounts = require('./controllers/routes/list_accounts')(app);
const rotaCards = require ('./controllers/routes/list_cards')(app);


const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Rodando em  http://${HOST}:${PORT}`);