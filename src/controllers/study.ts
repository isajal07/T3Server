const Study = require("../models/Study");

export const createStudy = async (req, res, next) => {
  try {
    const { name, info, numberOfSettings, createdBy, createdAt } = req.body;
    const newStudy = new Study({ name, info, numberOfSettings, createdBy, createdAt, isSelected: false });
    const savedStudy = await newStudy.save();
    res.status(200).json(savedStudy);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getStudies = async (req, res, next) => {
  try {
    const studies = await Study.find({});
    res.status(200).json(studies);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const selectStudy = async (req, res, next) => {
  try {
    const { studyId } = req.params;
    await Study.updateMany({ isSelected: false }).then(async (params) => {
      await Study.findByIdAndUpdate(studyId, { isSelected: true }, { new: true }).then((selectedStudy) => {
        res.status(200).send(selectedStudy);
      }).catch(e => res.status(500).send(e))
    })
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getSelectedStudy = async (req, res, next) => {
  try {
    const study = await Study.findOne({isSelected: true});
    res.status(200).json({ studyId: study._id });
  } catch (e) {
    res.status(500).send(e);
  }
};