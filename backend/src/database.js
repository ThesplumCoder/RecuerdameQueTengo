const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/RecuerdameQueTengo', 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    .then((db) => console.log('Base de datos conectada'))
    .catch((err) => console.error(err));
