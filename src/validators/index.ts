import Joi from 'joi'
import { NextFunction, Request, Response} from "express";



const createProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    type: Joi.string(),
    obs: Joi.string(),
    hide: Joi.bool(),
    postOn: Joi.array(),
    dueDate: Joi.date(),
  })

  const getByIDSchema = Joi.object({
    id: Joi.number().required()
  })
  
  export const validateProduct = (req:Request,res:Response,next:NextFunction):void => {
    if (createProductSchema.validate(req.body).error){
      res.status(400).send({message:createProductSchema.validate(req.body).error?.message})
    } else {
      next()
    }
  }

 export const validateId = (req:Request,res:Response,next:NextFunction):void => {
    if (getByIDSchema.validate(req.params).error){
      res.status(400).send({message:getByIDSchema.validate(req.params).error?.message})
    } else {
      next()
    }
  }
