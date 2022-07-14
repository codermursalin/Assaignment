require('dotenv').config({path:'config/config.env'});
module.exports={MONGO_URL,JWT_SECRET}=process.env;