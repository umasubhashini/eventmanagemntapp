
To-Do App Backend
This project is the backend of a To-Do App developed using Node.js and Express.js. The backend handles user authentication (registration and login), managing to-do items, and interaction with a MongoDB database. The application is built in a secure and efficient manner, leveraging bcrypt for password hashing and JWT (JSON Web Token) for user authentication.

Project Overview
The To-Do App Backend is a REST API that enables users to register, log in, and manage their to-do tasks. The backend provides users with the ability to create tasks, mark them as completed, and delete tasks. This API communicates with a MongoDB database, where user and task data are stored securely. The app is designed with security in mind, ensuring user data is protected through hashed passwords and token-based authentication.

Technologies Used
Node.js: A JavaScript runtime built on Chrome’s V8 JavaScript engine, enabling the development of scalable and efficient server-side applications.
Express.js: A web framework for Node.js used to simplify building APIs and handling HTTP requests.
MongoDB: A NoSQL database used to store data in flexible, JSON-like documents.
Mongoose: A MongoDB object modeling library for Node.js, allowing interaction with MongoDB using objects in JavaScript.
bcrypt.js: A library used to hash passwords for secure storage.
JWT (JSON Web Token): A secure token used for user authentication in APIs.
CORS (Cross-Origin Resource Sharing): A middleware that allows or restricts resources to be requested from another domain.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
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

Database Schema
User Schema
username: String (Required, Unique)
password: String (Hashed)
Todo Schema
task: String (Required)
completed: Boolean (Default: false)
Usage
Once the backend is up and running, users can authenticate via the POST /api/auth/register and POST /api/auth/login endpoints. Upon successful login, a JWT token is issued. This token should be included in the Authorization header for requests to protected endpoints (such as creating, updating, or deleting todos).

Contributing
If you would like to contribute to the project, please fork the repository and submit a pull request. Any improvements, bug fixes, or suggestions are welcome. You can also open an issue for any bugs you encounter or to propose enhancements.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
