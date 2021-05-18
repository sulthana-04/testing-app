const { required } = require('@hapi/joi');
const Joi = require('@hapi/joi');

const registerValidation = data =>{
const schema = {
    name: Joi.string().required(),
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required(),
    
    mobile: Joi.string().required(),
    gender: Joi.string().required(),
    state: Joi.string().required(),
    district: Joi.string().required(),
    address: Joi.string().required(),
    
};
return Joi.validate(data, schema );
};

const loginValidation = data =>{
    const schema = {
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    };
      return Joi.validate(data, schema );
    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;