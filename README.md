# Crypto Tracker

Crypto Tracker is a simple app to view and track Cryptocurrencies data. Users are able to sort the cryptos based on its parameter, add new crypto to track, and view the price growth in a chart. This app is built using React, React Hooks, and TailwindCSS. Deployed using Netlify.

To run this app in development

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\

Open (`http://localhost:3000`) to view it in the browser.

`yarn build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

In this assignment, the main component is `Table` component which holds majority of the state of the app. The data is fetched from the CoinGecko API using `axios` library and stored as a state. 

The main features that I implemented are sortable table based on the parameters, I implemented a custom hook `useSortable` to separate the logic in the component so the component logic is not bloated and also the hook is reusable in the future. 

I also implemented the mini chart on every row of the crypto data using `react-sparklines` library to show the price growth.

For the add a new crypto to track feature, I need to call a couple of API endpoints in order to retrieve the desired data. I would argue this logic can be moved to the backend therefore the frontend doesn't need to do too much and complicated logic in order to fetch the data and also this can be moved to the Redux store and implements actions and reducer to achieve more structured and maintainable code.

For this app I didn't implement any server-side service due to the time limit and also I think this app can handle all of the logic from client-side, but for the long run a backend API is absolutely necessary.

Obstacles:

- Time constraints
- The CoinGecko is often unresponsive
- TailwindCSS setup process

Things to improve:

If I had more time to work on this assignment, I would:

1. Implement a menu popup on each row to show options to delete the crypto, open CoinGecko details page
2. Add better user feedback by adding a modal popup or a snackbar when the user adds a new crypto or when the user deletes an item.
3. Implement better state management using Redux. This will reduce amount of code and logic inside of the components and makes things more scalable and easier to maintain.
4. Implement Typescript to avoid unnecessary bugs and add more elaborate type so it's easier to understand and easier to manage by other members of the team.
5. Add CSS responsiveness to the whole app.
6. Add backend API to separate the logic to the backend. This also allows us to store the users list to the database and persist the user data.