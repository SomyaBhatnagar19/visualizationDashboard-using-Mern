/* /backend/controller/dataController.js */

const dataModel = require('../model/Data');
const fs = require('fs');
const path = require('path');

const getData = async (req, res) => {
  try {
    const data = await dataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addData = async (req, res) => {
  try {
    // Read the jsonData.json file
    const filePath = path.join(__dirname, '../util/jsondata.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Insert the data into the Data collection
    const result = await dataModel.create(data);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add data' });
  }
};

module.exports = { getData, addData };