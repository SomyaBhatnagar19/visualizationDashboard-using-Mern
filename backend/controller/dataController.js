/* /backend/controller/dataController.js */

const dataModel = require('../model/Data');

const getData = async (req, res) => {
  try {
    const data = await dataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getData };
