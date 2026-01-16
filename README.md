# 📝 Blog Page – Full Stack Blog Application

A modern **full-stack blog application** built using **React**, **Redux**, and **Appwrite** that allows users to create, edit, publish, and manage blog posts with authentication and image uploads.

---

## 🚀 Features

- 🔐 **User Authentication**

  - Sign up & login using Appwrite Auth
  - Protected routes for authenticated users

- ✍️ **Blog Management**

  - Create new blog posts
  - Edit existing posts
  - Delete posts
  - Rich text editor for content

- 🖼️ **Image Upload**

  - Upload featured images for posts
  - Preview uploaded images

- 🔎 **Slug-Based URLs**

  - SEO-friendly post URLs
  - Auto-generated slugs from titles

- 🛡️ **Authorization**

  - Only post authors can edit or delete their posts

- ⚡ **State Management**
  - Global state handled with Redux

---

## 🧑‍💻 Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- React Hook Form
- Tailwind CSS

### Backend / BaaS

- Appwrite
  - Authentication
  - TablesDB
  - Storage (Image Uploads)

---

## 📂 Project Structure

```bash
src/
├── appwrite/        # Appwrite configuration & services
├── components/      # Reusable UI components
├── pages/           # Page-level components
├── redux/           # Redux store & slices
├── conf/            # Environment configuration
├── App.jsx
└── main.jsx

## ⚙️ Environment Setup

Create a .env file in the root directory and add:

VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```
