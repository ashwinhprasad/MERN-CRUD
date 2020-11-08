const router = require("express").Router()
const { addItems, getItems, deleteItem } = require("../controllers/item")

router.get("/",getItems);
router.post("/",addItems);
router.delete("/",deleteItem)

module.exports = router;