const express= require('express')
const usercontroller=require('../Controllers/usercontrol')
const conversationcontroller=require('../Controllers/conversationcontroller')
const router= express.Router()


// google auth register
router.post('/gologin',usercontroller.googlereg)
router.post('/reg',usercontroller.register)
router.post('/log',usercontroller.login)
router.post('/user',usercontroller.getuser)


router.post('/mess',conversationcontroller.sendmessage)
router.post('/getmess',conversationcontroller.getmessage)
router.post('/rec',conversationcontroller.re_message)


module.exports=router
