const express = require('express')
const mongoose =require('mongoose');
const morgan = require('morgan');
const corss = require('cors');
const path = require('path');




const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

const MONGODB_URL = 'cannot share the url'

mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB Connected!!!');
})

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(corss());

app.use(morgan('tiny'));

app.use('/api', routes)


// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('blank/build'));
// }


app.listen(PORT, console.log(`Server running on PORT ${PORT}`));