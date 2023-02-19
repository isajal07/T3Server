const Settings = require("../models/Settings");

export const getSettings = async (req, res, next) => {
  try {
    const getSettings = await Settings.find({});
    res.status(200).send(getSettings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createSettings = async (req, res, next) => {
  try {
    const { name, note, createdBy, training, session } = req.body;
    const newSettings= new Settings({ name, note, createdBy, isSelected: false, training, session });
    const savedSettings= await newSettings.save();
    res.status(200).json(savedSettings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const { training, session } = req.body;
    const { settingsId } = req.params;
    const settings = await Settings.findByIdAndUpdate(
      settingsId,
      { training, session },
      { new: true }
    );
    res.status(200).send(settings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const selectSettings = async (req, res, next) => {
  try {
    const { settingsId } = req.params;
    await Settings.updateMany({ isSelected: false }).then(async (params) => {
      await Settings.findByIdAndUpdate(settingsId, { isSelected: true }, { new: true }).then((selectedSettings) => {
        res.status(200).send(selectedSettings);
      }).catch(e => res.status(500).send(e))
    })
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getSelectedSettings = async (req, res, next) => {
  try {
    const settings = await Settings.findOne({isSelected: true});
    res.status(200).json(settings);
  } catch (e) {
    res.status(500).send(e);
  }
};
