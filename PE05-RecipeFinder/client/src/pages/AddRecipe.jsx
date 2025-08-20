import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm.jsx";
import { createRecipe } from "../api.js";

export default function AddRecipe() {
  const nav = useNavigate();
  async function onSubmit(data) {
    const saved = await createRecipe(data);
    nav(`/recipes/${saved._id}`);
  }
  return <RecipeForm onSubmit={onSubmit} submitText="Create" />;
}
