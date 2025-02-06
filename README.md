# Blog Website

Welcome to the **Galaxy Blogger**, a platform to share, explore, and engage with blogs. This website is built using modern web development tools like React and Firebase, ensuring a smooth, responsive, and secure user experience. Follow the guide below to set up, explore, and understand the features of the project.

---

## Purpose

The purpose of this project is to create a functional, dynamic, and visually appealing blog website where users can:
- Explore blogs and search by category or title.
- Add, update, and manage blogs.
- Save blogs to a personal wishlist.
- Interact with blogs through comments.
- Enjoy an optimized and responsive web experience.

---

## Live URL

Access the live project here: **[(https://galaxy-blogger.netlify.app)](#)**

---

## Key Features

1. **Authentication System**
   - Email/password registration and login.
   - Social login (e.g., Google).
   - Secure Firebase and MongoDB credentials via environment variables.
   - Private/protected routes secured with JWT.

2. **Dynamic Pages**
   - **Home Page**: Features a banner, recent blogs, newsletter, and additional sections.
   - **All Blogs Page**: Search and filter blogs by category or title.
   - **Blog Details Page**: View blog details, leave comments, and interact.
   - **Add Blog Page**: Add new blogs with required fields like title, image, category, and description.
   - **Update Blog Page**: Edit blogs created by the user.
   - **Featured Blogs Page**: Displays top 10 blogs based on word count with sortable table columns.
   - **Wishlist Page**: Lists wishlisted blogs for the logged-in user with options to remove them.

3. **Responsive Design**
   - Fully optimized for mobile, tablet, and desktop devices.
   - Visually pleasing color contrast and proper alignment.

4. **Additional Functionalities**
   - Animations using Framer Motion and React Intersection Observer.
   - Full-screen blog image preview using React Photo View.
   - Data table implementation with sortable columns using Tanstack Table.
   - Loading skeletons during data fetching for better user experience.

---

## Technology Stack

- **Frontend**: React, React Router, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Deployment**: Netlify (frontend), Vercel (backend)
- **Styling**: Custom CSS and Material-UI

----
