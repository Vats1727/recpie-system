const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipe"); // Removed .default.default
const router = express.Router();

router.get("/", getRecipes); // Get all recipes
router.get("/:id", getRecipe); // Get recipe by ID
router.post("/", addRecipe); // Add recipe
router.put("/:id", editRecipe); // Edit recipe
router.delete("/:id", deleteRecipe); // Delete recipe

module.exports = router;
