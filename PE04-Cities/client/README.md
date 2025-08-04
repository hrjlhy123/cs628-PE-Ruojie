# Input
- **Initial Cities**: An array in React state with objects (`id`, `name`, `country`, `population`, `description`)
- **User Actions**:
    1. Click a city name to view its details.
    2. Click "Add City" to open a form.
    3. Fill in Name, Country, Popilation and Description, then submit.

# Process
1. **Routing**
    - `BrowserRouter` with nested `<Routes>` for `/cities`, `/cities/add`, and `/cities/:id`.
    - A shared `CitiesLayout` component renders the sidebar and an `<Outlet>` for child routes.
2. **State Management**
    - `useState` in `App.js` holds the `cities` array.
    - `addCity()` appends a new city object (including a unique `id`) to that array.
3. **Form Submission**
    - `AddCity` component manages its own form state.
    - On submit, it calls `addCity()`, then uses `useNavigate` to redirect back to `/cities`.
4. **Detail View**
    - `CityDetails` grabs `:id` via `useParams`, finds the matching city, and displays all its fields.

# Output
    - A **Cities List** showing all city names as links.
    - A **City Details** panel beside the list when one is selected.
    - A **New City** immediately appears in the list after adding and redirecting.