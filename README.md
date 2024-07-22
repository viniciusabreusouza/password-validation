# Password Validation
This challenge is available at [Back-End Brasil](https://github.com/backend-br/desafios).

## Features

- Validate password strength against defined criteria.
- Return appropriate HTTP status codes and messages based on validation results.

## API Endpoints

- **URL**: `/validate-password`
- **Method**: `POST`
- **Request Body Example**:

  ```json
  {
    "password": "vYQIYxO&p$yfI^r1"
  }
  ```

- **Success Response**:

  - **Code**: `204 NO CONTENT`

- **Error Response**:

  - **Code**: `400 BAD REQUEST`
  - **Content**:

    ```json
    {
      "errors": [
        "Password must contain at least 8 characters.",
        "Password must contain at least one uppercase letter.",
        "Password must contain at least one lowercase letter.",
        "Password must contain at least one number.",
        "Password must contain at least one special character."
      ]
    }
    ```


## Functional Requirements

- Verify if the password has at least 8 characters.
- Verify if the password contains at least one uppercase letter.
- Verify if the password contains at least one lowercase letter.
- Verify if the password contains at least one numeric digit.
- Verify if the password contains at least one special character (e.g., !@#$%).

## How to run 
To run this project locally, follow these steps:

1. Ensure you have **Node.js v18 or greater** installed.

2. Clone the repository:
   ```
   git clone https://github.com/viniciusabreusouza/password-validation.git
   ```
3. Change into the project directory:
   ```
   cd password-validator
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm start
   ```

The API should be accessible at `http://localhost:3001/`.

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
