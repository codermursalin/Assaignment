const { createNewItem ,updateItem} = require('../controller/boardController');
const authenticate=require('../middlewares/authenticate');
const router=require('express').Router();
router.post('/',authenticate,createNewItem);
router.put('/:id',authenticate,updateItem);
module.exports=router;