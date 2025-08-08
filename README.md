# Foodio – Modern Resturant Management Web App

![Petify Responsive UI Screenshot](https://i.postimg.cc/d0sNPGXG/foodio.jpg)

**Live Site:** [https://foodi0.web.app](https://foodi0.web.app)

Foodio is a modern, visually appealing food delivery web application built with React, Vite, and Tailwind CSS. It offers a seamless experience for discovering, ordering, and managing your favorite meals, with a focus on beautiful UI, smooth UX, and robust functionality.

## Features

- **Home & Hero Section:**
  - Eye-catching hero slider with food images and catchy taglines.
  - Clear call-to-action for users to start exploring.
- **Gallery:**
  - Infinite scroll gallery of high-quality food images.
  - Lightbox for full-size image viewing.
- **Customer Reviews:**
  - Swiper-powered testimonial slider with real user feedback and avatars.
  - Animated transitions and modern layout.
- **Food Details:**
  - Detailed food cards with floating images, icons, badges, and action buttons.
- **User Authentication:**
  - Secure login, signup, and protected routes using Firebase Auth.
- **Profile & Orders:**
  - Manage your profile, view your orders, and track your favorite foods.
- **Add & Edit Foods:**
  - For vendors/admins: add, edit, and manage food items easily.
- **Responsive Navigation:**
  - Sidebar menu for mobile, closes on click.
  - Smooth transitions and modern iconography.
- **Footer:**
  - Quick navigation, user links, and social media integration.
- **Dark/Light Theme Toggle**
- **Loading Spinners, Alerts, and Animations**

## Tech Stack

- **Frontend:** React Router, Vite, Tailwind CSS, DaisyUI
- **State & Context:** React Context API
- **API & Data:** Axios, Firebase
- **UI/UX:** Swiper, React Icons, Lottie, yet-another-react-lightbox, react-awesome-reveal
- **Utilities:** Infinite Scroll, SweetAlert2

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omarfaruk-dev/foodio-client.git

   cd foodio-client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```


## Folder Structure

- `src/pages/` – Main pages (Home, Gallery, FoodDetails, Login, SignUp, etc.)
- `src/components/` – Reusable UI components (ThemeToggle, Button, etc.)
- `src/contexts/` – Auth context and provider
- `src/api/` – API hooks for foods and orders
- `src/assets/` – Images, lotties, and static assets
- `src/layouts/` – Main layout wrapper
- `src/hooks/` – Custom React hooks

## Customization
- Update branding, images, and content in `src/assets/` and relevant components.
- Configure Firebase in `src/firebase/firebase.init.js`.
- Adjust theme and colors in `tailwind.config.js` and `daisyui` settings.

## Credits
- Food images: Unsplash, Pexels, and custom assets
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [LottieFiles](https://lottiefiles.com/)
- UI Libraries: Swiper, DaisyUI, SweetAlert2


---

**Foodio** – Taste the Future of Food Delivery 🍽️
