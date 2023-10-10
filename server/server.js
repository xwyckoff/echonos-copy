const express = require('express');
const db = require('./config/connection');
const session = require('express-session');
const path = require('path');
const routes = require('routes');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001


const sess = {
    secret: 'superdupersecret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: db
    })
}

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})