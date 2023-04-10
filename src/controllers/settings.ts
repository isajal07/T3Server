const Settings = require("../models/Settings");

export const getSettings = async (req, res, next) => {
  try {
    const getSettings = await Settings.find({}).populate('study', {'name':1, 'numberOfSettings':1});
    res.status(200).send(getSettings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getStudySettings = async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const getSettings = await Settings.find({ study: studyId}).populate('study', {'name':1, 'numberOfSettings':1});
    res.status(200).send(getSettings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createSettings = async (req, res, next) => {
  try {
    const { name, note, createdBy, study, training, session, settingNumber } = req.body;
    const newSettings= new Settings({ name, note, createdBy, isSelected: false, study: study._id, training, session, settingNumber });
    const savedSettings= await newSettings.save();
    res.status(200).json(savedSettings);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const { study, training, session, settingNumber } = req.body;
    const { settingsId } = req.params;
    const settings = await Settings.findByIdAndUpdate(
      settingsId,
      { study, training, session, settingNumber },
      { new: true }
    );
    res.status(200).send(settings);
  } catch (e) {
    res.status(500).send(e);
  }
};

// TODO: need to select more than one settings. 
export const selectSettings = async (req, res, next) => {
  try {
    const { settingsId } = req.params;
    const { studyId, settingNumber } = req.query;
    
     const filter = { study: studyId, settingNumber: settingNumber };
     const update = { isSelected: false, settingNumber: null };

    await Settings.updateMany(filter, update).then(async (params) => {
      await Settings.findByIdAndUpdate(settingsId, { isSelected: true, settingNumber: settingNumber }, { new: true }).then((selectedSettings) => {
        res.status(200).send(selectedSettings);
      }).catch(e => res.status(500).send(e))
    })
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getSelectedSettings = async (req, res, next) => {
  try {
    const { settingNumber } = req.params;
    const settings = await Settings.findOne({isSelected: true, settingNumber });
    res.status(200).json(settings);
  } catch (e) {
    res.status(500).send(e);
  }
};
