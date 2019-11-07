var express= require('express');
var router=express.Router();
var ctrlregister=require('../services/newsService'); 

//defining routes
router
.route('/news')
.post(ctrlregister.NewsPost);


//export routes
module.exports=router;
