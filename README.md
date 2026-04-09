<div align="center">

# 🍕 Fast React Pizza

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?&logo=react)](https://react.dev)
[![Redux](https://img.shields.io/badge/Redux-2.8.2-764ABC?&logo=redux)](https://redux.js.org)
[![Vite](https://img.shields.io/badge/Vite-4.2.0-646CFF?&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-06B6D4?&logo=tailwindcss)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React%20Router-6.11.0-F44250?&logo=react-router)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-green?)](LICENSE)

<br/>

**A modern, lightning-fast pizza ordering web application built with React, Redux, and Tailwind CSS**

</div>

---

## 🎯 Live Demo

> 🔗 **[View Live Demo](https://pizza.khush.pro)**
>
---

## 📌 About the Project

**Fast React Pizza Co.** is a full-featured pizza ordering platform that demonstrates modern React development practices. It combines a seamless user experience with clean, scalable code architecture.

### What Problem Does It Solve?
- Provides a fast, intuitive interface for customers to browse pizza menus and place orders
- Enables real-time order tracking with geolocation-based address detection
- Streamlines the order management process with dynamic state management

### Why Was It Built?
This project serves as a comprehensive showcase of advanced React patterns including:
- State management with Redux Toolkit
- Client-side routing with React Router DOM
- Asynchronous operations and data fetching
- Responsive UI design with Tailwind CSS
- Modern build tooling with Vite

### Who Is It For?
- 🍕 **Pizza Customers** — Browse menus and place orders effortlessly
- 👨‍💻 **React Developers** — Learn professional React architecture patterns
- 🎓 **Students** — Understand full-stack frontend application development

---

## ✨ Features

- ✅ **Browse Pizza Menu** — Fetch and display menu items from REST API
- ✅ **Shopping Cart** — Add, update, and remove items with real-time calculations
- ✅ **Order Management** — Create new orders and track existing ones
- ✅ **Geolocation Integration** — Automatic address detection via reverse geocoding
- ✅ **User Profiles** — Personalized experience with username persistence
- ✅ **Order Tracking** — View order details and estimated delivery times
- ✅ **Priority Updates** — Mark orders as priority (rush delivery)
- ✅ **Responsive Design** — Mobile-first, fully responsive interface
- ✅ **Error Handling** — Graceful error pages and validation
- ✅ **Loading States** — Visual feedback during data fetching
- ✅ **Form Validation** — Phone number validation for orders
- ✅ **Price Formatting** — Currency-aware price display (EUR)

---

## 💡 Use Cases

| Use Case | Description |
|----------|-------------|
| **Quick Ordering** | Customers can browse, select pizzas, and place orders in under 2 minutes |
| **Order Status** | Track real-time delivery status with estimated arrival times |
| **Address Correction** | System auto-detects location; users can manually edit if needed |
| **Cart Management** | Easily adjust quantities or remove items before checkout |
| **Order History** | Retrieve past orders using order ID for re-ordering |
| **Learning Reference** | Developers can study production-grade React patterns |

---

## 🎯 Benefits

| Benefit | Impact |
|---------|--------|
| **Lightning-Fast Performance** | Vite's instant HMR and optimized bundling ensure <3s load times |
| **Scalable Architecture** | Redux Toolkit simplifies state management as features grow |
| **Mobile-Optimized** | Tailwind CSS ensures pixel-perfect responsive design |
| **API-Ready** | Clean service layer for seamless backend integration |
| **Developer Experience** | Hot module replacement, ESLint, and Prettier for smooth workflows |
| **Production-Ready** | Implements error boundaries, loading states, and validations |

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **UI Framework** | React | 18.2.0 |
| **State Management** | Redux Toolkit | 2.8.2 |
| **Routing** | React Router DOM | 6.11.0 |
| **Styling** | Tailwind CSS | 3.3.2 |
| **Build Tool** | Vite | 4.2.0 |
| **CSS Processing** | PostCSS & Autoprefixer | 8.4.23 |
| **Linting** | ESLint | 8.39.0 |
| **Code Formatting** | Prettier | 2.8.8 |
| **APIs** | REST (Fetch API) | Native |
| **Geolocation** | Browser Geolocation API | Native |
| **Reverse Geocoding** | BigDataCloud API | v1.0 |

---

## 🚀 Getting Started (For Developers)

### Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Why |
|------|---------|-----|
| **Node.js** | 16.x or higher | Runtime for npm and dev server |
| **npm** | 8.x or higher | Package manager |
| **Git** | Latest | Version control |

**Verify Installation:**
```bash
node --version  # v16.0.0 or higher
npm --version   # 8.0.0 or higher
```

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kapvm4444/fast-react-pizza.git
   cd fast-react-pizza
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Verify Installation**
   ```bash
   npm list react react-redux @reduxjs/toolkit react-router-dom
   ```

### Environment Variables

This project uses public APIs and does not require `.env` configuration. However, for future extensibility:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | _(Optional)_ Custom API endpoint | `https://api.example.com` |
| `VITE_GEOLOCATION_API_KEY` | _(Optional)_ BigDataCloud API key | `your-api-key-here` |

**Note:** The app currently uses a public demo API (`https://react-fast-pizza-api.jonas.io/api`)

### Run Locally

#### Development Server

Start the dev server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- **Local:** `http://localhost:3003`
- **Network:** `http://<your-ip>:3003`

Press `q` to quit the server.

#### Development Features

- ⚡ **Instant HMR** — Changes reflected in browser within milliseconds
- 🐛 **Source Maps** — Full debugging capabilities in DevTools
- 🎨 **Tailwind IntelliSense** — Class autocomplete in editor
- ✅ **ESLint** — Real-time code quality feedback
- 📝 **Prettier** — Auto-formatting on save (if configured)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

**Output:** Compiled files will be generated in the `dist/` directory

#### What the Build Does

- ✅ Minifies JavaScript and CSS
- ✅ Optimizes asset loading
- ✅ Generates source maps for debugging
- ✅ Tree-shakes unused code

**Preview Production Build Locally:**
```bash
npm run preview
```

Open `http://localhost:4173` in your browser to test the production build.

### Project Structure Explained

```
fast-react-pizza/
├── src/
│   ├── App.jsx                 # Main app routing and layout
│   ├── main.jsx                # Entry point with Redux provider
│   ├── store.js                # Redux store configuration
│   ├── index.css               # Global Tailwind styles
│   │
│   ├── features/               # Feature-based modules
│   │   ├── cart/               # Shopping cart management
│   │   │   ├── Cart.jsx        # Cart page component
│   │   │   ├── CartItem.jsx    # Individual cart item
│   │   │   ├── CartOverview.jsx # Cart summary in header
│   │   │   ├── cartSlice.js    # Redux state management for cart
│   │   │   ├── DeleteItem.jsx  # Remove item button
│   │   │   ├── EmptyCart.jsx   # Empty state component
│   │   │   └── UpdateItemQuantity.jsx # Quantity controls
│   │   │
│   │   ├── menu/               # Menu browsing
│   │   │   ├── Menu.jsx        # Menu page with loader
│   │   │   └── MenuItem.jsx    # Individual pizza card
│   │   │
│   │   ├── order/              # Order management
│   │   │   ├── CreateOrder.jsx # Checkout form with address & geolocation
│   │   │   ├── Order.jsx       # Order details & tracking page
│   │   │   ├── OrderItem.jsx   # Individual order item
│   │   │   ├── SearchOrder.jsx # Find order by ID
│   │   │   └── UpdateOrder.jsx # Priority/rush delivery
│   │   │
│   │   └── user/               # User management
│   │       ├── CreateUser.jsx  # Username input
│   │       ├── Username.jsx    # Display user name
│   │       └── userSlice.js    # Redux user state & geolocation
│   │
│   ├── services/               # API integration layer
│   │   ├── apiRestaurant.js    # Pizza API calls
│   │   └── apiGeocoding.js     # Reverse geocoding API
│   │
│   ├── ui/                     # Reusable UI components
│   │   ├── AppLayout.jsx       # Main layout with header & cart
│   │   ├── Button.jsx          # Styled button component
│   │   ├── Error.jsx           # Error boundary & page
│   │   ├── Header.jsx          # App header with navigation
│   │   ├── Home.jsx            # Landing page
│   │   ├── LinkButton.jsx      # Link styled as button
│   │   ├── Loader.jsx          # Loading spinner
│   │   └── SearchOrder.jsx     # Order search input
│   │
│   └── utils/                  # Utility functions
│       └── helpers.js          # Currency & date formatting
│
├── public/                     # Static assets
├── index.html                  # HTML entry point (pizza emoji favicon!)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS plugins
├── prettier.config.cjs         # Code formatter config
├── eslint.config.js            # Linting rules
└── README.md                   # This file!
```

---

## 📖 How to Use (For Users)

### Getting Started as a Customer

#### 1. **Enter Your Name**
- Upon landing, you'll see the welcome screen
- Enter your name to personalize your experience
- Your name will be remembered for this session

#### 2. **Browse the Menu**
- Click **"Continue Ordering"** to view available pizzas
- Each pizza shows:
    - 🍕 Pizza name and description
    - 💶 Price in EUR
    - ➕ Button to add to cart

#### 3. **Build Your Cart**
- Click **➕** next to any pizza to add it
- A confirmation appears at the bottom (cart overview)
- Adjust quantities or remove items anytime
- See real-time total price

#### 4. **Proceed to Checkout**
- Click the **Cart** button in the header
- Review your items and quantities
- Adjust quantities or remove items if needed
- Click **"Order Now"** when ready

#### 5. **Complete Your Order**
- **Enter Your Phone:** Required for delivery contact
- **Confirm Address:** The app detects your location automatically
- **Edit Address:** Click to manually change if needed
- **Optional Priority:** Check "Make it priority" for rush delivery (+20%)
- Click **"Order Now"** to submit

#### 6. **Track Your Order**
- You'll receive a **unique Order ID** (e.g., `#123456`)
- Save this ID to track your order anytime
- Click **"Search Order"** in the header to look up status
- See:
    - Current order status
    - Estimated delivery time
    - Items ordered
    - Option to mark as priority

#### 7. **Receive Your Pizza** 🍕
- Delivery time updates in real-time
- Once delivered, you can order again!

### Key Features Explained

| Feature | How to Use |
|---------|-----------|
| **Auto Address Detection** | Allow browser location access when prompted; system finds your address |
| **Phone Validation** | Enter valid phone number (international formats accepted) |
| **Quantity Controls** | Use **+** and **-** to adjust items; item removes at quantity 0 |
| **Priority Orders** | Check "priority" at checkout for rush delivery (+20% cost) |
| **Order Search** | Enter your Order ID in the header search to track status anytime |

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### Fork & Branch Workflow

1. **Fork the Repository**
   ```bash
   Go to https://github.com/kapvm4444/fast-react-pizza
   Click "Fork" button
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/fast-react-pizza.git
   cd fast-react-pizza
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # Examples: feature/add-pizza-filters, fix/cart-bug
   ```

4. **Make Your Changes**
    - Follow existing code style
    - Add comments for complex logic
    - Test thoroughly locally

5. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: Add pizza size selection option"
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
    - Go to the main repository
    - Click "New Pull Request"
    - Describe your changes clearly
    - Reference any related issues

### Code Guidelines

- Follow the existing project structure
- Use meaningful variable and function names
- Keep components focused and reusable
- Write descriptive commit messages
- Test your changes before submitting PR

---

## Author

Made with ❤️ by [Khush Vachhani](https://github.com/kapvm4444)

- 🔗 **GitHub:** [kapvm4444](https://github.com/kapvm4444)
- 💼 **Portfolio:** [khush.pro](https://khush.pro)
- 💬 **LinkedIn:** [khushvachhani](https://linkedin.com/in/khushvachhani)

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star! ⭐

**Built with React + Redux + Vite + Tailwind CSS**

</div>

