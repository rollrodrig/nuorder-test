# Strategy
First, the app query the issues from React GitHub issues, then it is stored on the reducer. Simultaneous calls to the reducer are made using redux-thunk while fetching data and when it is ready. When user types on filter input, it has a delay using Rxjs debounceTime. The filtered data are listed in the results list. The results list is navigable using up and down arrows.

# Tool used
- Typescript
- React Hooks
- Redux and redux thunk: To manage the sate
- Logic component: To handle states and use events
- View component: To render visible components
- Storybook: To preview the ViewComponents
- Jest: To make the test
- Eslint prettier: To standarize the code
- RXJS to debounce time whe user type on filter box.
- styled-components
- Fake results are generate from 'customjsonbuilder' to mimic the api result.
