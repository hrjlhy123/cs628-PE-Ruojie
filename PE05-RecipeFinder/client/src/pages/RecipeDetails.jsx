import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getRecipe, deleteRecipe } from "../api.js";

export default function RecipeDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    getRecipe(id)
      .then(setData)
      .catch(() => nav("/recipes"));
  }, [id]);

  async function onDelete() {
    if (!confirm("Delete this recipe?")) return;
    await deleteRecipe(id);
    nav("/recipes");
  }

  if (!data) return null;

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>{data.name}</h2>
      <div className="meta">{(data.ingredients || []).length} ingredients</div>
      <div style={{ marginTop: 12 }}>
        <Link className="btn" to={`/recipes/${id}/edit`}>
          Edit
        </Link>
        <button className="btn danger" onClick={onDelete}>
          Delete
        </button>
      </div>
      <hr />
      <section>
        <h3>Ingredients</h3>
        <ul>
          {(data.ingredients || []).map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{data.instructions || "—"}</p>
      </section>
      {data.notes && (
        <section>
          <h3>Notes</h3>
          <p>{data.notes}</p>
        </section>
      )}
    </div>
  );
}
