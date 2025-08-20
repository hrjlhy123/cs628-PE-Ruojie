# Input
Users provide inputs through the UI and URLs. On the Recipe List page, clicking a name supplies the recipe id via the route. The Add and Edit forms capture textual fields: name, ingredients (one per line), instructions, and notes. These values become JSON bodies for POST/PUT requests. Deleting is triggered by a button and confirmation.

# Process
React Router renders a persistent layout with a sidebar list and a nested outlet for interface consistency. Components call fetch to /api endpoints. Express parses JSON, validates required fields, and uses the MongoDB Node.js driver to insert, find, update, or delete documents in the recipes collection. IDs are handled with ObjectId. After database work, the server returns JSON.

# Output
Back end outputs structured JSON or errors with HTTP status codes. Front end renders list items, details, and form success states, navigates to /recipes/:id after create/update, and refreshes the sidebar immediately.