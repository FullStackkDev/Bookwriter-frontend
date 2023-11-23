# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

install all libraries in node package manager

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
press a to run all test cases
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Standalone pages
 
- [Sign-In Page for React Application](#Sign-In-Page-for-React-Application)
- [Sign-Up Page for React Application](#Sign-Up-Page-for-React-Application)
- [Project Structure](#project-structure)
- [Functionality](#functionality)
- [3rd party social login](#How-to-use)

# Sign-In Page for React Application

This project is a standalone component that represents a sign-in page for a React application. It includes design, functionality, and integration with third-party authentication providers. The project is organized into several files and folders for better maintainability and separation of concerns.

# Sign-Up Page for React Application

This project is a standalone component that represents a sign-up page for a React application. It includes design, functionality, and integration with third-party authentication providers. The project is organized into several files and folders for better maintainability and separation of concerns.

## Project Structure

The project consists of the following main components:

- **Design**: The design of the sign-in page, including UI components and styling.
- **API**: Functions for making API requests for user authentication.
- **Validator**: Validation rules for user input fields.
- **Helper**: Generic functions and utilities used throughout the project.
- **Styles**: Custom styles for the components.

## Functionality

The sign-in / sign-up page component provides the following functionality:

- User input fields.
- Validation of user input based on defined rules.
- Handling of form submission and API requests for sign-in.
- Integration with third-party authentication providers (e.g., Google, Facebook, GitHub, LinkedIn).
- Display of error messages and toasts for user feedback.

## 3rd party social login

**Google**

- Create a Google Cloud Project:
  * Go to the [https://console.cloud.google.com/] (For-create-project)
  * Click on "Select a project" and create a new project.
- OAuth Consent Screen:
  * In the Google Cloud Console, go to the "OAuth consent screen" section.
  * Configure your OAuth consent screen by providing necessary details such as the application name, user support email, and developer contact information.
- Create Credentials:
  * In the Google Cloud Console, navigate to the "Credentials" section.
  * Create OAuth 2.0 Client ID credentials.
  * Configure the web client ID by specifying authorized JavaScript origins and redirect URIs, typically pointing to your React application.
- React Application Setup:
  * Create a React application or use an existing one.
  * Install the necessary NPM packages to integrate Google login, such as react-google-login.
- Add Google Login Component:
  * Use the LoginSocialGoogle component from reactjs-social-login in your application.
  * Pass the client ID obtained from the Google Cloud Console to the component.
  * Define a callback function to handle the response from Google login.

**LinkedIn**

- Create a LinkedIn App:
  * Go to the [https://www.linkedin.com/developers/] (LinkedIn-Developer-Console)
  * Create a new app and configure its details, including the name and description.
- OAuth 2.0 Configuration:
  * In your LinkedIn app's settings, configure the OAuth 2.0 settings.
  * Set the redirect URL to point to your React application.
- React Application Setup:
  * Create a React application or use an existing one.
  * Install the necessary NPM packages for LinkedIn login, such as reactjs-social-login.
- Add LinkedIn Login Component:
  * Use the LoginSocialLinkedin component from reactjs-social-login in your application.
  * Pass the LinkedIn client ID and other required parameters to the component.
  * Define a callback function to handle the response from LinkedIn login.

**GitHub**

- Create a GitHub OAuth App:
  * Go to your GitHub account settings and navigate to "Developer settings" > "OAuth Apps."
  * Create a new OAuth App and configure its details, including the name, homepage URL, and callback URL.
- React Application Setup:
  * Create a React application or use an existing one.
  * Install the necessary NPM packages for GitHub login, such as react-social-login-buttons.
- Add GitHub Login Component:
  * Use the LoginSocialGithub component from react-social-login-buttons in your application.
  * Pass the GitHub client ID, client secret, and redirect URI to the component.
  * Define a callback function to handle the response from GitHub login.

  **Facebook**

- Create a Facebook App:
  * Go to the [https://developers.facebook.com/] (Facebook-Developer-Portal).
  * Create a new app and configure its details, including the name and contact email.
- Facebook Login Setup:
  * In your Facebook app's settings, configure Facebook Login.
  * Add the valid redirect URIs for your React application.
- React Application Setup:
  * Create a React application or use an existing one.
  * Install the necessary NPM packages for Facebook login, such as react-social-login-buttons.
- Add Facebook Login Component:
  * Use the LoginSocialFacebook component from react-social-login-buttons in your application.
  * Pass the Facebook App ID to the component.
  * Define a callback function to handle the response from Facebook login.

**Remember to secure your client IDs and secrets, and configure your React application to handle the authentication flows and user data returned from these third-party services. Each service has its own specific documentation and setup steps, so consult their documentation for more detailed instructions.**
