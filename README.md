# SPA Event Manager
A Single Page Application (SPA) for course and user management, built with Vite, Vanilla JS, and SweetAlert2.
---

## Features

- **User login and registration**
- **Roles:** admin and visitor
- **Admin dashboard:** manage events
- **Public panel:** enroll in available courses
- **SPA navigation:** no page reloads
- **User-friendly alerts:** SweetAlert2

## Folder Structure

```
## 🚀 Used technologies

- HTML5
- CSS3
- JavaScript (Vanilla)
- Web Storage API (LocalStorage & SessionStorage)

```

## Installation

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. (Optional) If you use json-server for the REST API:

   ```
   npx json-server --watch db.json --port 3000
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Login:**  
  Log in with an existing user (see `db.json`).
- **Admin:**  
  Access `/admin` if your role is `admin`.
- **Visitor:**  
  Access `/public` if your role is `visitante`.
- **Enrollment:**  
  Visitors can enroll in available events.

## Main Code (`main.js`)

- **SPA Routes:**  
  Defines routes and their HTML files.
- **Session:**  
  Stores and removes the logged-in user in localStorage.
- **SPA Navigation:**  
  Intercepts links and buttons to navigate without reloading.
- **Route Protection:**  
  Only allows access to routes according to user role.
- **Dynamic Loading:**  
  Loads the HTML and JS needed for each view.

## Dependencies

- [Vite](https://vitejs.dev/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [json-server](https://github.com/typicode/json-server) (optional for REST API simulation)

---

## ✍️ Autor

**Emanuel Gaviria** **LoveLace** **Gaviriacardonaemanuel@gmail.com** **1000920354**
Software Development Student
Developed as part of a practical exercise to apply knowledge about DOM, local storage and validation of forms in JavaScript.

---

If you need more details about any file or function, feel free to ask!
