module.exports = app => {
    const game = require('../controllers/game.controller');
    let router = require('express').Router();

    router.post('/', game.create);
    
    router.get('/:id', game.findOne);

    router.get('/', game.findAll);

    router.put('/:id', game.update);

    router.delete('/:id', game.delete);

    app.use('/game', router);

};