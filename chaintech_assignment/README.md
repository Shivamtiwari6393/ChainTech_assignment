# ChainTech Assignment

This application consists of three main components: Registration, Login, and Manage Account. It allows users to register, log in, and manage their account details.

## Components

### Registration

**Functionalities:**

- Provides a form for users to create a new account.
- Includes fields for username, email, password, and confirm password.
- Validates if the password and confirm password match.
- Sends a POST request to the backend API to create a new user.
- Displays appropriate error messages for email already in use and server errors.
- Shows a success message upon successful registration.

### Login

**Functionalities:**

- Provides a form for users to log into their account.
- Includes fields for email and password.
- Sends a POST request to the backend API to authenticate the user.
- Displays appropriate error messages for invalid credentials and server errors.
- Redirects the user to the Manage Account page upon successful login.

### Manage Account

**Functionalities:**

- Displays the user's account details.
- Allows the user to update their account information.
- Sends requests to the backend API to fetch and update user details.

## Additional Features

- **Navbar**: Includes navigation links to the Registration and Login components.
- **Routing**: Uses React Router for navigation between different components.
- **Form Validation**: Validates user inputs in the Registration and Login forms.
- **Error Handling**: Displays error messages for various scenarios such as invalid inputs, server errors, etc.

## How to Run

1. Clone the repository:

   ```sh
   git clone https://github.com/Shivamtiwari6393/ChainTech_assignment.git
   cd ChainTech_assignment
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend server:

   ```sh
   npm start
   ```

4. Start the backend server:
   ```sh
   cd backend
   npm install
   npm start
   ```

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, MongoDB
- **Other**: React Router for routing, bcrypt for password hashing

## Folder Structure

- `src/components`: Contains the React components (Registration, Login, ManageAccount, Navbar).
- `src/styles`: Contains the CSS files for styling the components.
- `backend`: Contains the backend code (Express server, routes, models, etc.).
