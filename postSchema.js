const Joi = require('joi')

const schema = {
    title: Joi.string().min(10).max(40).required() , 
    company: Joi.string().min(1).max(20).required(),
    description: Joi.string().min(30).max(400).required(),
    salary: Joi.number().min(1),
    tags: Joi.array().items(Joi.string()),
    location: Joi.string().min(2).required(),
    skills:{
    required:Joi.array().items(Joi.string()).min(1).required(),
    advantage:Joi.array().items(Joi.string())
        }
}