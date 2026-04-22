#  Mini Task Management App – Frontend

##  Project Overview
This is the frontend of a Mini Task Management Application built as part of a Full Stack Developer Intern assessment.  
The application allows users to securely register, log in, and manage their personal tasks through a clean and responsive dashboard.

This frontend is built using modern React-based technologies and integrates with a secure ASP.NET Core backend using Firebase Authentication.

---

##  Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Firebase Authentication
- REST API Integration

---

##  Key Features
- Secure user authentication using Firebase (Email & Password)
- Task management (Create, Read, Update, Delete)
- Real-time UI updates after task actions
- Client-side filtering (All / Completed / Pending)
- Token-based API communication (Bearer Token)
- Loading states for better UX
- Error handling for API and network failures
- Protected routes (Dashboard accessible only for logged-in users)

---

## Architecture Highlights (Recruiter Focus)
- Clean separation of concerns using:
  - components/ for UI components
  - lib/ for API and Firebase logic
- Centralized API handler (api.ts) for reusable HTTP requests
- Secure token handling via localStorage
- Dynamic UI rendering based on application state
- Scalable component-based design

---

##  Project Structure

src/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
│
└── lib/
    ├── api.ts
    └── firebase.ts

---

## Environment Variables

Create a .env.local file in the root of the project and add:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key  
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com  
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id  
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id  
NEXT_PUBLIC_API_BASE_URL=http://localhost:5170  

Important:
- Do NOT commit .env.local to GitHub
- Ensure backend URL is correct

---

##  Firebase Setup

1. Go to Firebase Console  
2. Create a new project  
3. Add a Web App  
4. Enable Authentication  
5. Enable Email/Password Sign-in  
6. Copy Firebase config into .env.local  

---

## ▶ How to Run Locally

1. Install dependencies  
npm install  

2. Start development server  
npm run dev  

3. Open in browser  
http://localhost:3000  

---

##  API Communication

All API requests include Firebase token:

Authorization: Bearer <Firebase Token>

Handled in:
src/lib/api.ts

---

##  Pages

/register – User registration  
/login – User login  
/dashboard – Task management dashboard  

---

##  Testing Flow

1. Register a new user  
2. Login  
3. Access dashboard  
4. Add tasks  
5. Update task status  
6. Delete tasks  
7. Use filtering options  

---

##  Deployment

Frontend can be deployed using Vercel (recommended)

---

##  Notes

- Backend API must be running before using the dashboard  
- If backend is not reachable, an error message will be shown  
- Token is stored in localStorage after login  
- Dashboard is protected and requires authentication  

---

##  Features Implemented

- Task filtering (All / Completed / Pending)  
- Loading indicators  
- Error handling for API failures  
- Clean UI using Tailwind CSS  

---

