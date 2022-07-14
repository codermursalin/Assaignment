const Board = require('../models/board');

exports.createNewItem = async (req, res, next) => {
    const { title } = req.body;
    const newItem = await Board.create({ title });
    res.status(201).json({
        id: newItem.id,
        stage: newItem.stage,
        title: newItem.title
    });
}

exports.updateItem = async (req, res, next) => {
    const { stage } = req.body;
    const { id } = req.params;
    if (stage === 1 || stage === 2 || stage === 3) {
        const item = await Board.findOneAndUpdate({ id }, { $set: { stage } });
        res.status(200).json({
            id: item.id,
            stage: item.stage,
            title: item.title
        });
    }
    else{
        res.status(400).json({});
    }
}