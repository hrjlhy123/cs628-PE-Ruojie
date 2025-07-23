# Input
The app begins with a simple input field where the user can type in any task they want to track. When the user finishes typing and clicks the `Add Task` button, the input is stored in the component state. (Empty input is ignored to avoid invalid entries.) The input value is managed through React `useState`, and each task gets added to a dynamic `todos` list.

# Process
When the user submits a task, a new object is created with:
    · a `title` (task description),
    · a unique `id`,
    · and a `complete` flag (`false` by default).
The task is then added to the state.
Each todo includes:
    · a `Delete` button (to remove the task).
The todos list is managed entirely in React component state.

# Output
Todos are rendered on the screen dynamically.
    · its title
    · a red `Delete` button to remove it from the list
All state changes (adding or deleting tasks) are immediately reflected in the UI.