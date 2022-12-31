const Test = require("../models/test");

export const addText = async (req, res, next) => {
    try {
        const { someText } = req.body;
        const newText = new Test({
            someText: someText
        })
        const testSave = await newText.save();
        res.json(testSave)
    } catch (e) {
        res.status(500).send(e);
    }
};

export const updateText = async (req, res, next) => {
    try {
        var text = { '_id': req.params.id };
        // req.newData.someText = req.body.someText;
        console.log(text)
        Test.findOneAndUpdate(text, { 'someText': req.body.someText }, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send('Succesfully saved.');
        });
    } catch (e) {
        res.status(500).send(e);
    }
};