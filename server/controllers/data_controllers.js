const data = require('../models/todo_models');

exports.getAllData = (req, res) => {
    data.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(404)
            .json({ message: 'Data not found', error: err.message }));
}

exports.postCreateData = (req, res) => {
    data.create(req.body)
        .then((data) => res.json({ message: 'Data added !!', data }))
        .catch((err) => res.status(404)
            .json({ message: 'Failed to add data', error: err.message }));
}

exports.deleteData = (req, res) => {
    
    data.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({ message: 'Data deleted !!', data }))
        .catch((err) => res.status(404)
            .json({ message: 'Failed to delete data', error: err.message }));
}


exports.editData =async (req,res) =>{
    const id = req.params.id;
    const newData = req.body.data;


  
    try {

        const item = await data.findById(id);
  
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
  
      item.data = newData;
      await item.save();
  
      res.json({ message: "Item updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }

}