
const Category = require("../dataBase/category")

async function createCategory(model)
{
    let category = new Category({
        name: model.name
    });
    await category.save();
    return category.toObject();
}

async function updateCategory(id, model)
 {
    await Category.findOneAndUpdate({_id:id}, model);
    return;
}
async function deleteCategory(id)
 {
    await Category.findByIdAndDelete(id);
    return;
}


module.exports = {createCategory , updateCategory , deleteCategory}