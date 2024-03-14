const express = require('express');

const router = express.Router();

const { getAllData, postCreateData, deleteData,editData } = require('../controllers/data_controllers');

router.get("/", getAllData);

router.post("/", postCreateData);

router.delete("/:id", deleteData);

router.put("/:id",editData)
module.exports = router;