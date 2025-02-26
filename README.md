# To reviewers

## How to run the app
- `cd` into the project directory
- Run `npm start` in console (this will install dependencies and start local server)
- Visit `http://localhost:5173/` in your browser

## Architecture and design decisions

### The project ...
- Is built using Vite, TypeScript and React.
- Is structured using a component-based architecture.
- Fetches data from a JSON file using Fetch API, processes the data and saves it to `localStorage`.
- Relies on `localStorage` to persist selected categories across page reloads.
- Uses TailwindCSS for styling and custom `bolblue` color (color-picked from multi-select-filter.jpg).
- Is responsive and works well on both desktop and mobile devices.
- Utilizes React-Redux for state management.
- Is WCAG-compliant and accessible.
- Relies on React Suspense to handle loading state.
- Uses React Error Boundary to catch and handle errors gracefully.

### Also ...
- Selected categories are saved/persisted to localStorage on "Toepassen" button click. 
- I could have implemented saving to localStorage on category selection (checkbox check), but then what would be the purpose of "Toepassen" button?
- Categories in JSON file contain encoded HTML entities like `&amp;` (not sure if bug or feature). 
I've used `DOMParser.parseFromString` method to decode them.