const Sequelize= require('sequelize');
const post = require('../models').post
//const post = models.post


const create = async function(req,res){
    return await post
        .create ({
             name: req.body.name,
             description: req.body.description
        })
        .then(post => res.status(200).send(post))
        .catch(error => res.status(400).send(error))
}

const listAll = async function(_, res){
    return await post.findAll()
        .then(post => res.status(200).send(post))
        .catch(error => res.status(400).send(error))
}

const find = async function(req,res){
    return await post.findAll({
         where: {
             id: req.params.id,
         }
     })
     .then(post => res.status(200).send(post))
     .catch(error => res.status(400).send(error))
}

const destroy = async function(req,res){
    return await post.destroy({
          where: {
              id: req.params.id
          }
      })
      .then(post => res.status(200).send(post.status))
      .catch(error => res.status(400).send(error))
}

const update = async function(req,res){
    return await post.update({ name: req.body.name, description: req.body.description }, {
        where: {
          id: req.body.id
        }
      })
      .then(post => res.status(200).send(post))
      .catch(error => res.status(400).send(error))
}


module.exports = {
 create,
 listAll,
 find,
 destroy,
 update
};