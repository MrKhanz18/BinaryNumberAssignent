const { validationResult } = require("express-validator");
const User = require("../models/user");

exports.deposit = (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }

    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err:"Couldn't deposit amount"
            })
        }
        res.json({
            deposit:user.deposit,    
            totalbalance:(user.totalbalance + user.deposit),
        })
    })
}

exports.withdrawl = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array([0].msg)
        })
    }
    
    const user = new User(req.body)
    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err:"Coukdn't save withdrawl amount in record"
            })
        }
        else if(user.withdrawl < user.totalbalance)
        {
            res.json({
                totalbalance:user.totalbalance - user.withdrawl,
                withdrawl:user.withdrawl
            })
        }
        else{
            return res.status(400).json({
                err:"Insufficient Funds!!"
            })
        }
    })

}