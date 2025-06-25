# 📝 NoteMaster - A Secure Note-Taking Application

NoteMaster is a full-stack note-taking web application built with React.js and Node.js that allows users to create, edit, delete, and organize their personal notes securely. The application features user authentication, real-time note management, and a beautiful glassmorphism UI design.

---

## ✨ Key Features

- 🔐 **User Authentication** – Secure login/signup using JWT tokens
- 🗃️ **CRUD Operations** – Create, read, update, and delete personal notes
- 📱 **Responsive Design** – Works seamlessly across all devices
- 🧊 **Modern UI** – Glassmorphism with smooth transitions and animations
- 🧠 **Context API** – Efficient state management
- 🔐 **Protected Routes** – Authenticated access to personal notes only
- ✅ **Form Validation** – Frontend validation for login and signup
- 🔔 **Alert System** – Toast-style feedback for user actions

---

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Context API
- CSS3 (Glassmorphism)
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 🎨 UI Highlights

- 🧊 Glassmorphism Design: Transparent elements with backdrop blur
- 🌈 Gradient Backgrounds: Smooth visual transitions
- 🖱️ Interactive Elements: Hover effects and animations
- 🧾 Modern Forms: Clean and accessible inputs
- 📱 Responsive Layout: Adapts to mobile, tablet, and desktop screens

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A running backend server (expected at `http://localhost:5000`)

---

### 📥 Installation

```bash
git clone https://github.com/your-username/NoteMaster.git
cd NoteMaster
npm install
```

Or using yarn:

```bash
yarn install
```

---

### 🔧 Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

---

### ▶️ Running the Application

Start the React development server:

```bash
npm start
# or
yarn start
```

This will launch the app at:  
🔗 [http://localhost:3000](http://localhost:3000)

If it doesn't open automatically, manually navigate to that URL in your browser.

---

## 🧾 Available Scripts

| Script           | Description                                  |
|------------------|----------------------------------------------|
| `npm start`      | Starts frontend dev server at port **3000**  |
| `npm test`       | Runs tests                                   |
| `npm run build`  | Creates an optimized production build        |
| `npm run eject`  | Ejects config from Create React App (advanced) |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── About.js
│   ├── Addnote.js
│   ├── Alert.js
│   ├── Home.js
│   ├── Navbar.js
│   ├── Noteitem.js
│   ├── Notes.js
│   ├── login.js
│   ├── signup.js
│   └── context/
│       └── notes/
│           ├── noteContext.js
│           └── NoteState.js
├── App.js
├── App.test.js
└── styles/
    ├── addnote.css
    ├── home.css
    ├── index.css
    ├── login.css
    ├── navbar.css
    ├── Noteitem.css
    └── signup.css
```

---

## 🔒 Security Features

- JWT-based secure authentication
- Protected frontend routes
- API call security via auth headers
- Client-side validation
- Token stored safely in `localStorage`

---

## 🌍 Backend API Endpoints

Ensure your backend (at `http://localhost:5000`) includes these routes:

- `POST /api/auth/login`
- `POST /api/auth/signup`
- `GET /api/note/fetchallnotes`
- `POST /api/note/addnotes`
- `DELETE /api/note/deletenote/:id`
- `PUT /api/note/updatenote/:id`

---

## 📦 Production Build

To build for production:

```bash
npm run build
```

Output will be in the `build/` folder with optimized static files.

---

## 🌟 Why NoteMaster?

- ✅ **Secure**
- ✨ **Modern Design**
- 📱 **Fully Responsive**
- ⚡ **Fast and Lightweight**
- 🔧 **Well-structured Codebase**

> This project demonstrates modern web development practices with React Hooks, Context API, JWT Auth, protected routes, and advanced CSS techniques like Glassmorphism.

---

## 📄 License

This project is licensed for educational and personal use.

---

Made with by Nirmal patel
