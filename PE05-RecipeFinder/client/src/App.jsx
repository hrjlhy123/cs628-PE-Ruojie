import { Routes, Route, Navigate } from 'react-router-dom';
import RecipesLayout from './pages/RecipesLayout.jsx';
import Placeholder from './pages/Placeholder.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';
import AddRecipe from './pages/AddRecipe.jsx';
import EditRecipe from './pages/EditRecipe.jsx';


export default function App(){
return (
<div className="container">
<Routes>
<Route path="/" element={<Navigate to="/recipes" replace />} />
<Route path="/recipes" element={<RecipesLayout />}>
<Route index element={<Placeholder />} />
<Route path=":id" element={<RecipeDetails />} />
<Route path=":id/edit" element={<EditRecipe />} />
<Route path="new" element={<AddRecipe />} />
</Route>
<Route path="*" element={<Navigate to="/recipes" replace />} />
</Routes>
</div>
);
}