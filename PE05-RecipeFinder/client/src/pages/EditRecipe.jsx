import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, updateRecipe } from "../api.js";
import RecipeForm from "../components/RecipeForm.jsx";

export default function EditRecipe() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    getRecipe(id)
      .then(setData)
      .catch(() => nav("/recipes"));
  }, [id]);

  async function onSubmit(payload) {
    await updateRecipe(id, payload);
    nav(`/recipes/${id}`);
  }

  if (!data) return null;
  return <RecipeForm initial={data} onSubmit={onSubmit} submitText="Save" />;
}
