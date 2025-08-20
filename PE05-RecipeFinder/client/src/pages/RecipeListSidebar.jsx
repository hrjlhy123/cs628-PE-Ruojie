import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipes } from "../api.js";

export default function RecipeListSidebar() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const loc = useLocation();

  useEffect(() => {
    getRecipes().then(setItems);
  }, [loc]);

  return (
    <ul className="list">
      {items.map((r) => (
        <li key={r._id} className={`item ${id === r._id ? "active" : ""}`}>
          <Link to={`/recipes/${r._id}`}>
            <div style={{ fontWeight: 600 }}>{r.name}</div>
            <div className="meta">
              {(r.ingredients || []).length} ingredients
            </div>
          </Link>
        </li>
      ))}
      {!items.length && (
        <li className="empty">No recipes yet. Click “Add Recipe”.</li>
      )}
    </ul>
  );
}
