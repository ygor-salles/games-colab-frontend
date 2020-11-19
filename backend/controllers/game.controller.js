const db = require('../models')
const Game = db.game;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.image || !req.body.description) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Game instance
    const game = new Game({
        image: req.body.image,
        description: req.body.description
    });

    // Save Game in the database
    game
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the game."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Game
        .findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Game with id " + id
                });
            else 
                res.send(data);
        })
        .catch(() => {
            res.status(500).send({
                message: "Error retrieving Game with id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    Game
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
        return;
    }

    const id = req.params.id;
    
    Game
        .findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Game with id=${id}. Maybe Game was not found!`
                });
            } else {
                res.send({
                    message: "Game was updated successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Game to game with id=" + id
            });
        });
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    Game
        .findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Game with id=${id}. Maybe Game was not found!`
                });
            } else {
                res.send({
                    message: "Game was deleted successfully!"
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Could not delete Game with id=" + id
            });
        });
};