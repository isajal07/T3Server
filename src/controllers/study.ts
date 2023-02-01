const Study = require("../models/Study");

export const createStudy = async (req, res, next) => {
  try {
    const { studyName, scheduledStudyData, info } = req.body;
    const newStudy = new Study({ studyName, scheduledStudyData, info  });
    const savedStudy = await newStudy.save();
    res.status(200).json(savedStudy);
  } catch (e) {
    res.status(500).send(e);
  }
};
