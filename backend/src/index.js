require('./database')
const app = require('./app');

app.listen(app.get('puerto'));
console.log(app.get('puerto'));
