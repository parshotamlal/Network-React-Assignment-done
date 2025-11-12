
React Account Management Application

A complete React (v16+) application that allows users to Register, Login, and Manage their Account Profile.
All user data is stored securely in Local Storage, and users can update info, delete their account, and switch between Light and Dark themes.

🌟 Features

✅ Register New Users — Create an account with username, email, and password.
✅ Login Authentication — Secure login using stored credentials.
✅ Profile Page — View, edit, and manage personal account info.
✅ Image Upload — Upload and display a profile picture.
✅ Theme Toggle — Switch between light and dark modes.
✅ Auto Greeting — Displays "Good Morning / Afternoon / Evening".
✅ Login Counter — Tracks how many times the user has logged in.
✅ Local Storage Persistence — Saves user data even after refresh.
✅ Error Handling — Alerts for invalid inputs, duplicate emails, or missing data.
✅ Responsive Design — Works beautifully on all devices using Bootstrap 5.

⚙️ Requirements

Before running this project, make sure you have:

🧩 Node.js (v14 or above)

💻 npm (comes with Node.js)

🌐 A web browser (like Chrome or Edge)

🗂️ Folder Structure
account-management-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Profile.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── README.md

🚀 How to Run the Project (Step-by-Step)
🧱 1. Create a New React App

Open Command Prompt or VS Code Terminal and type:

npx create-react-app account-management-app


Then:

cd account-management-app

📦 2. Install Required Dependencies

Install Bootstrap (for styling) and React Router (for page navigation):

npm install bootstrap react-router-dom

🧩 3. Create Folder Structure

Inside the src folder, create a new folder named:

components


Then create three files inside it:

Register.js
Login.js
Profile.js


Copy the respective code for each page (from your project files).

💾 Data Storage

All user details (username, email, password, image, theme, and login count) are saved locally using the browser’s Local Storage, ensuring persistent data across sessions.
