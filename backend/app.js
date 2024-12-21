const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const { connectToDB } = require('./util/database');
require('dotenv').config();
const cors = require('cors')

const { isAuth } = require('./middlewares/auth')

const { authRouter } = require("./routes/auth");
const { profileRouter } = require("./routes/profile");
const { vaultRouter } = require('./routes/vault')
const { friendsRouter } = require('./routes/friends')



const app = express();
const server = http.createServer(app)
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

connectToDB();
console.log("Connection Established")

app.use(cors({
    origin: "https://expense-tracker-v2-aipi.vercel.app",
    credentials: true
}));

app.use(cookieParser())

app.use((req, res, next) => {
    console.log("Hello")
    if (req.method == "OPTIONS") {
        res.status(200);
        return res.send();
    } else {
        next();
    }
})

app.use('/auth', authRouter)

app.use(isAuth);

app.use('/profile', profileRouter)

app.use('/vault', vaultRouter)

app.use('/friends', friendsRouter)







const main = async () => {
    try {

        server.listen(process.env.PORT || 3000, () => {
            console.log(`server listening on port ${process.env.PORT || 3000}`)
        });
    }
    catch (error) {
        throw error;
    }
}
main();