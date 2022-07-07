const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const createUserTemplate = require('../models/CreateUserModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signedUpUser({
        id:request.body.id,
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password,
        dateOfBirth:request.body.dateOfBirth,
        mobile:request.body.mobile,
        status:request.body.status,
        accountType:request.body.accountType
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router