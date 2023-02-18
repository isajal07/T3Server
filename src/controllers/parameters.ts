const Parameters = require("../models/Parameters");

export const getParameters = async (req, res, next) => {
  try {
    const parameters = await Parameters.find({});
    res.status(200).send(parameters);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createParameters = async (req, res, next) => {
  try {
    const { name, note, training, session } = req.body;
    const newParameters = new Parameters({ name, note, isSelected: false, training, session });
    const savedParameters = await newParameters.save();
    res.status(200).json(savedParameters);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateParameters = async (req, res, next) => {
  try {
    const { training, session } = req.body;
    const { parameterId } = req.params;
    const parameters = await Parameters.findByIdAndUpdate(
      parameterId,
      { training, session },
      { new: true }
    );
    res.status(200).send(parameters);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const selectParameter = async (req, res, next) => {
  try {
    const { parameterId } = req.params;
    await Parameters.updateMany({ isSelected: false }).then(async (params) => {
      await Parameters.findByIdAndUpdate(parameterId, { isSelected: true }, { new: true }).then((selectedParam) => {
        res.status(200).send(selectedParam);
      }).catch(e => res.status(500).send(e))
    })
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getSelectedParameters = async (req, res, next) => {
  try {
    const parameters = await Parameters.findOne({isSelected: true});
    res.status(200).json(parameters);
  } catch (e) {
    res.status(500).send(e);
  }
};
