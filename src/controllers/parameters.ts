const Parameters = require("../models/Parameters");

export const getParameters = async (req, res, next) => {
  try {
    const parameters = await Parameters.findOne({});
    res.status(200).json(parameters);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createParameters = async (req, res, next) => {
  try {
    const { training, session } = req.body;
    const newParameters = new Parameters({ training, session });
    const savedParameters = await newParameters.save();
    res.status(200).json(savedParameters);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateParameters = async (req, res, next) => {
  try {
    const { training, session } = req.body;
    const parameters = await Parameters.findOneAndUpdate(
      {},
      { training, session },
      { new: true }
    );
    res.status(200).send(parameters);
  } catch (e) {
    res.status(500).send(e);
  }
};
