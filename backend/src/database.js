const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://ThesplumCoder:MongoDBase2022@cluster0.jotqc.mongodb.net/RecuerdameQueTengo?retryWrites=true&w=majority', 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    .then((db) => console.log('Base de datos conectada'))
    .catch((err) => console.error(err));
