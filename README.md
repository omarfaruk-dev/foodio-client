# Foodio – Modern Resturant Management Web App

![Petify Responsive UI Screenshot](https://i.postimg.cc/d0sNPGXG/foodio.jpg)

**Live Site:** [https://foodi0.web.app](https://foodi0.web.app)

Foodio is a modern, visually appealing food delivery web application built with React, Vite, and Tailwind CSS. It offers a seamless experience for discovering, ordering, and managing your favorite meals, with a focus on beautiful UI, smooth UX, and robust functionality.

## Key Features

- Home & Hero Section with Eye-catching Slider
- Infinite Scroll Gallery with Lightbox
- Customer Reviews with Swiper Slider
- Detailed Food Cards with Action Buttons
- User Authentication (Login/Signup)
- Profile & Orders Management
- Add & Edit Foods for Vendors
- Responsive Navigation with Sidebar
- Footer with Quick Navigation
- Dark/Light Theme Toggle
- Loading Spinners & Animations

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

4. **Install additional packages (if needed):**
   ```bash
   npm install axios firebase react-icons swiper lottie-react yet-another-react-lightbox react-awesome-reveal sweetalert2
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
