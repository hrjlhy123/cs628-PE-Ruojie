# Input
The user provides two inputs: (1) selecting a genre from the dropdown menu to filter the movie list, and (2) clicking on a movie to trigger an alert showing its title. The initial movie data is defined as a static array of movie objects, each containing a title, genre, and release year.

# Process
The application processes user actions using React state and hooks. When a genre is selected, the app filters the movie array to show only movies matching the genre, or all if "All Genres" is selected. When a movie is clicked, an event handler reads the movie title and displays it in an alert box. React’s functional components and JSX dynamically render the filtered list and handle state updates efficiently.

# Output
The app displays a styled, interactive list of movies with their details. Filtering updates the displayed list, and clicking a movie shows an alert with its title.