import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";

// @fetch all categories
// @route GET /api/categories
// @access public

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  let newCats = [];
  categories.forEach((category) => {
    newCats.push({
      _id: category._id,
      images: category.images,
      name: category.name,
      desc: category.desc,
      user: category.user,
      published: category.published,
    });
  });

  res.status(200).json(newCats);
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name, desc, images, user } = req.body;

  const category = await Category.create({
    name,
    desc,
    images,
    user,
    published: true,
  });
  if (category) {
    res.status(200).json({
      status: "success",
      data: {
        _id: category._id,
        images: category.images,
        name: category.name,
        desc: category.desc,
        user: category.user,
        published: category.published,
      },
    });
  } else {
    res.status(400).json("error");
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.body.id);
  if (category) {
    (category.published = req.body.published
      ? !category.published
      : category.published),
      (category.name = req.body.name || category.name),
      (category.desc = req.body.desc || category.desc),
      (category.images = req.body.images || category.images);
  }

  const updatedCategory = await category.save();
  if (updateCategory) {
    res.status(200).json({ status: "success" });
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await Category.deleteOne({ _id: category._id });
    res.status(200).json({ message: "Category deleted" });
  } else {
    throw new Error("Resource not found");
  }
});
