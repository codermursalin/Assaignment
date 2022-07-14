const express = require('express');
const passport = require("passport");
const connectDatabase = require('./database');
const boardRouter = require('./routes/board');
const authRoute=require('./routes/auth');
const PORT = process.env.PORT || 5000;
const app = express();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
require("./middlewares/passportJWT")(passport);
app.use('/boards', boardRouter);
app.use('/auth',authRoute);
app.listen(PORT, () => console.log(`listening to port ${PORT}`));




