const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { User, Operations} = require('../models/models')

router.post('/signup', async (req,res) => {
    
    bcrypt.genSalt(Math.floor(Math.random() * 10), (_error, salt) => {
        bcrypt.hash(req.body.password, salt, async (error, hash) => {
            if (error){
                return res.status(400).json({message: erro})
            }
            
            await User.create({
                email: req.body.email,
                password: hash,
                cpf: req.body.cpf
            })
            
            const user = await User.findOne({where: {email: req.body.email}})
            
            return res.status(201).json({
                user: {
                    id: user.id, 
                    email: user.email, 
                    cpf: user.cpf, 
                    balance: user.balance
                    }
                })
                
            })
        })
    })
    
router.post('/login', passport.authenticate("local"), (req, res) => {
        res.status(200).json({user: req.user})
    }
)

router.put('/operations', async (req, res) => {
    if(req.isAuthenticated()){
        const user = await User.findOne({where: {cpf: req.body.cpf}})
        if (user.cpf !== req.user.cpf){
            return res.status(400).json({message: 'invalid cpf'})
        }
        
        const operation = await Operations.create({
            type: req.body.type,
            date: new Date(),
            amount: req.body.amount,
            userId: req.user.id
        })

        user.balance += req.body.amount
        await user.save()

        return res.status(201).json({operation: operation})
    }
    return res.status(401).json({message: "you need to be signed in"})
})
    
router.post('/extract', async (req, res) => {
    console.log(req.body)
    if(req.isAuthenticated()){
        const user = await User.findOne({where: {cpf: req.body.cpf}})
        if (user.cpf !== req.user.cpf){
            return res.status(400).json({message: 'invalid cpf'})
        }

        const operations_list = await user.getOperations()

        return res.status(200).json({balance: user.balance, operations: operations_list})
    }
    return res.status(401).json({message: "you need to be signed in"})
})

router.get('/logout', (req, res) => {
    req.logout()
    res.status(204).send()
})

router.get('/user', async (req, res) => {
    if(req.isAuthenticated()){
        const user = await User.findOne({where: {id: req.user.id}})

        return res.status(200).json({id: user.id, balance: user.balance, cpf: user.cpf})
    }
    return res.status(401).json({message: "you need to be signed in"})
})



module.exports = router