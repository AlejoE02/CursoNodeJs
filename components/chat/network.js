const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Error interno', 500, err);
    });
});

router.get('/:userId', function(req, res){
    controller.listchats(req.params.userId)
    .then(users => {
        response.success(req, res, users, 200);
    })
    .catch(err => {
        response.error(req, res, 'Error interno', 500, err);
    });
});

module.exports = router;