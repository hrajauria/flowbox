# Introduction

This application has been developed with the following technical details in mind -

1. It is structured into the following structure - \
   a. components - contains all the UI building blocks for the application. The focus is on creating pure components to keep them as reusable as possible.\
   b. context - contains all context related functions\
   c. data - houses all api and mock releated functions\
   d. hooks - contains all custom hooks\
   e. pages - contains all entry point HOCs for routes\
   f. types - contains typings for all functions\
   g. utils - contains all utility function of the application\

2. Unit tests have been added using Jest and RTL for UI components.

3. Storybook has been added create a UI library for all components.

4. The data has been added to the state in the application using context which further uses the useReducer hook to keep a copy of the state and leverage the dispatching capability through all components.

5. React error boudary has been added to the App to create a fallback in case of any error in rendering through the component tree.

6. MUI has been used as the component library.

7. For styling components, teh following two approaches are taken - \
   a. MUI Components - sx property is used \
   b. Generic Components - styled function from MUI is used to create custom styled components \

# Next Steps

The following improvements could be added to the application -

1. Suspense component should be added to the layout to render fallback component till the images loads.

2. Further testing could be added such as visual testing, acceptance testing and e2e testing.

3. Authentication should be added to secure the application and API.

4. A theme provider can be created with color pallette options and size functions to have a constant look for the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
