import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000
// COnnectio mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true
})

// bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.use(express.static('public'))
// On import la route 
routes(app)

app.get('/', (req, res) => {
    res.send(`Serveur node et express sur le port ${PORT}`)
})

app.listen(PORT, ()=> {
    console.log(`Votre serveur est le port ${PORT}`)
})