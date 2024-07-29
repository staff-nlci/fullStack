//create category routes

const express = require('express');
const router = express.Router();
const {createCategory, updateCategory , deleteCategory} =  require('../handlers/category-handler')

const Category = require("../dataBase/category")
router.post('', async (req, res) => {
        let model = req.body;
        let result = await createCategory(model)
        res.send(result);
})

//put request api

router.put('/:id', async (req, res) => {
    // let category;
    let model = req.body;
    let id = req.params['id'];
   await updateCategory(id, model)
   res.send({msg:"Updated category"})
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await deleteCategory(id)
    res.send({msg:"Delete category"})
 
})

module.exports = router;