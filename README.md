# 🏗️ Frontend Test – PT Murni

This project is a responsive, pixel-perfect implementation of a Figma design using **React** and **Tailwind CSS** (v4.1 via `@tailwindcss/vite`). Built as part of a technical test to demonstrate proficiency in modern frontend development, responsive layout, and accessibility best practices.

---

## Project Info

- **Project Name:** `test-pt-murni`
- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4.1](https://tailwindcss.com/)
- **Routing:** [`react-router-dom`](https://reactrouter.com/)
- **Icons:** [`react-icons`](https://react-icons.github.io/react-icons/)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/daffatabiano/PT.-Murni.git
cd test-pt-murni
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build For Production 

```bash
npm run build
```

### 5. Preview Production build locally 
```bash
npm run preview
```

## Technologies Used
- React 19
- Vite 7
- React Icons
- Tailwindcss
- React Router DOM v7

## Tailwind CSS Configuration

Fully customized using **@tailwindcss/vite** in Tailwind v4.1+ style (no tailwind.config.js file by default, but can use inline config via CSS layers).

Config Includes : 
- Custom colors, fonts (Poppins, Montserrat)
- Responsive spacing system
- **@layer utilities** for custom shadows, animations
- Optimized using Tailwind’s built-in purging system

## Project Structure
src/
├── assets/            # Static images, icons, fonts
├── components/        # Reusable UI components (Navbar, Card, Carousel, etc.)
├── routes/            # Routing Path.
├── utils/             # For helpers utility (constants)
├── views/             # View-level components (Home, About, Contact, Services)
├── App.jsx            # App root
├── main.jsx           # Entry point
├── styles/            # Tailwind base + custom layer utilities

## Features

- Pixel-perfect Figma implementation (desktop, tablet, mobile)

- Semantic, accessible HTML using <header>, <main>, <footer>, <section>

- Reusable components (Card, Form, Carousel, etc.)

- Form validation (email/message) with real-time error feedback

- Image optimization (via src/assets/, responsive object-fit)

- Smooth animations (group-hover, transition, custom bounce)

- Custom shadow and spacing using @layer utilities

## Browser Compatibility

Tested on latest versions of:

✅ Chrome

✅ Firefox

✅ Safari

✅ Microsoft Edge

## Performance Optimization

- Purged unused Tailwind styles in production

- Optimized images (Web-friendly formats from Unsplash/Freepik)

- Lazy-loaded assets and minimal dependencies

- Used transition and transform carefully to prevent layout thrashing

## Design Decisions & Challenges

- Tailwind 4.1 approach: Used @tailwindcss/vite instead of legacy tailwind.config.js

- Custom animation utilities made using @layer utilities (e.g. animate-bounce-right)

- Created fixed-size textarea with no resize, matching design fidelity

- Navigation and interactive states were manually handled with accessibility in mind

## Responsive Breakpoints
Viewport    Width   Layout Optimized
mobile      375px       ✅    
Tablet      768px       ✅
Desktop     1440px      ✅

## Release Link
https://pt-murni.vercel.app/

## License 
This project is private and submitted as part of a technical evaluation. Not for commercial use.
