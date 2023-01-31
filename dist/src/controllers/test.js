"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateText = exports.addText = exports.getText = void 0;
const Test = require("../models/test");
const getText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTexts = yield Test.find({});
        res.send(getTexts);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.getText = getText;
const addText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { someText } = req.body;
        const newText = new Test({
            someText: someText
        });
        const testSave = yield newText.save();
        res.json(testSave);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.addText = addText;
const updateText = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var text = { '_id': req.params.id };
        // req.newData.someText = req.body.someText;
        console.log(text);
        Test.findOneAndUpdate(text, { 'someText': req.body.someText }, { upsert: true }, function (err, doc) {
            if (err)
                return res.send(500, { error: err });
            return res.send('Succesfully saved.');
        });
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.updateText = updateText;
