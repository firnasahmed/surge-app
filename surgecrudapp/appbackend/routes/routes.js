const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const createUserTemplateCopy = require('../models/CreateUserModels')
const bcrypt = require('bcrypt')

router.post('/CreateUser', async (request, response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const createdUser = new createUserTemplateCopy({
        id:request.body.id,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:securePassword,
        dateOfBirth:request.body.dateOfBirth,
        mobile:request.body.mobile,
        status:request.body.status,
        accountType:request.body.accountType
    })
    createdUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router