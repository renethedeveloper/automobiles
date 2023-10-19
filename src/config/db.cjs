const mongoose = require('mongoose');

let connectionString = `mongodb+srv://renethedeveloper:${process.env.MONGO_PASS}@cluster0.fznub90.mongodb.net/Cars?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to DATABASE');
})
.catch((error) => {
    console.error('Connection to DATABASE failed:', error);
});

