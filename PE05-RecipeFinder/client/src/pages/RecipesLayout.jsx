import { Outlet, Link, useLocation } from "react-router-dom";
import RecipeListSidebar from "./RecipeListSidebar.jsx";

export default function RecipesLayout() {
  const loc = useLocation();
  return (
    <>
      <aside className="sidebar">
        <h1>Recipe Finder</h1>
        <div style={{ marginBottom: 12 }}>
          <Link className="btn accent" to="/recipes/new">
            + Add Recipe
          </Link>
        </div>
        <RecipeListSidebar />
      </aside>
      <main className="content">
        <Outlet key={loc.key} />
      </main>
    </>
  );
}
