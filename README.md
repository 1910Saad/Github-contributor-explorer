# GitHub Repository Contributors Explorer

This project is a **GitHub Repository Contributors Explorer** built using the **MERN** stack (MongoDB, Express, React, Node.js). It fetches contributors for the [Supabase GitHub repository](https://github.com/supabase/supabase) using the GitHub API and displays them with **infinite scrolling**. The app is modular, responsive, and closely matches the look and feel of GitHub.

---

## Features

- Fetches contributors for the **Supabase repository** using the **GitHub API**.
- Displays the contributor's **username**, **avatar**, and **number of contributions**.
- **Infinite scrolling**: Loads more contributors dynamically as the user scrolls.
- Clickable contributor profiles redirect to the respective GitHub profile.
- Modular and reusable components with a **GitHub-like UI**.
- **Mobile-responsive** design.

---

## Tech Stack

### Frontend:
- **React**: For building the UI and managing state.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: Styled to match GitHub’s design.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js to handle the API routing.
- **Axios**: For fetching data from the GitHub API on the backend.
- **CORS**: For handling cross-origin requests between the frontend and backend.

---

## Installation and Setup

### Prerequisites:
- Node.js installed on your system.

### 1. Clone the Repository
```
git clone https://github.com/your-username/github-contributors-explorer.git
cd github-contributors-explorer
```
---


### 2. Install Dependencies
### Frontend :
```
cd frontend
npm i or npm install
```
### Backend :
```
cd backend
npm i or npm install
```
---

### 3. Setting Up GitHub API Token
To avoid hitting the GitHub API rate limit, you need to generate a GitHub Personal Access Token:
- Go to GitHub Tokens.
- Click "Generate new token".
- Name the token and select the public_repo permission.
- Copy the token.
  
Add the token in backend/src/controllers/contributorsController.js:
```
'Authorization': `token REPLACE_WITH_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`
```
---
### 4. Running the Application

### Backend:
Navigate to the backend folder and run the server:
```
cd backend
node server.js
```

This starts the backend at http://localhost:5000.

### Frontend:

Open a new terminal, navigate to the frontend folder, and run the development server:

```
cd frontend
npm start
```

The app will run on http://localhost:3000.

---

### Code Overview

### Frontend :

- **App.js**: This is the main component where the contributor data is fetched from the backend. It contains the infinite scroll functionality and renders the contributors list.
- **components/ContributorCard.js**: A reusable component that displays individual contributor details such as avatar, username, and the contribution count.
- **useInfiniteScroll.js:** Custom hook that handles the infinite scrolling logic by observing when the user reaches the bottom of the page.

### Frontend :

- **server.js**: The entry point for the backend. It starts the server on http://localhost:5000.
- **app.js**: Configures the Express application, sets up middleware, and registers routes.
- **routes/contributors.js**: Defines the /api/contributors endpoint, which calls the controller to fetch contributors.
- **controllers/contributorsController.js**: Handles the logic for fetching data from the GitHub API. It uses Axios to make the API request and sends the response to the frontend.
