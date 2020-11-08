const Item = require("../models/item");

const getItems = async (req,res) => {
    
    Item.find({})
     .then((items) => res.json(items))
     .catch(err => res.status(400).json({msg:err}))
    
}

const addItems = (req,res) => {
    
    const { name } = req.body;

    const newItem = new Item({
        name
    })

    newItem.save()
     .then((item) => res.json({item:item}))
     .catch(err => res.json({err:err}))
    

}

const deleteItem =(req,res) => {

    const { name } = req.body;

    Item.findOne({name:name}).remove()
     .then((item) => res.json(item))
     .catch(err => console.log(err))

}

module.exports = { addItems, getItems, deleteItem } 