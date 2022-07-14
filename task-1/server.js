const express = require('express');
const connectDatabase = require('./database');
const boardRouter = require('./routes/board');
const PORT = process.env.PORT || 5000;
const app = express();
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/boards', boardRouter);
app.listen(PORT, () => console.log(`listening to port ${PORT}`));




