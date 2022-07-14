const { createNewItem ,updateItem} = require('../controller/boardController');

const router=require('express').Router();
router.post('/',createNewItem);
router.put('/:id',updateItem);
module.exports=router;