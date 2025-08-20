import { useState, useEffect } from "react";

export default function RecipeForm({ initial, onSubmit, submitText = "Save" }) {
  const [name, setName] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initial) {
      setName(initial.name || "");
      setIngredientsText((initial.ingredients || []).join("\n"));
      setInstructions(initial.instructions || "");
      setNotes(initial.notes || "");
    }
  }, [initial]);

  function handleSubmit(e) {
    e.preventDefault();
    const ingredients = ingredientsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    onSubmit({ name, ingredients, instructions, notes });
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>{submitText === "Create" ? "Add Recipe" : "Edit Recipe"}</h2>
        <label>Name</label>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Tomato Pasta"
          required
        />

        <label>Ingredients (one per line)</label>
        <textarea
          className="textarea"
          value={ingredientsText}
          onChange={(e) => setIngredientsText(e.target.value)}
          placeholder={`2 tomatoes\n200g pasta\n1 tsp salt`}
        />

        <label>Instructions</label>
        <textarea
          className="textarea"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Boil pasta..."
        />

        <label>Notes (optional)</label>
        <input
          className="input"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Tastes better next day"
        />

        <div style={{ marginTop: 12 }}>
          <button className="btn accent" type="submit">
            {submitText}
          </button>
        </div>
      </section>
    </form>
  );
}
