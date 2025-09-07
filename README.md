## About WindDelivery

WindDelivery is a modern, full-featured web application designed as a dynamic food delivery or restaurant platform. It empowers users to effortlessly browse a diverse menu, manage their shopping cart, place orders, and even allows registered users to list and manage their own food items, all secured with robust user authentication. Built with React and powered by Vite, Tailwind CSS, and Firebase, WindDelivery offers a seamless and interactive user experience.

## Features

This platform provides a rich set of functionalities for both users and food item managers:

*   **User Authentication & Authorization**: Secure login, registration, and social login options (Google, GitHub) powered by Firebase.
*   **Food Browsing**: Display and allow browsing of a comprehensive list of food items.
*   **Detailed Product Pages**: View individual food products with detailed information on dedicated pages.
*   **Shopping Cart Management**: Add, manage, and remove items from a persistent shopping cart (using local storage).
*   **Food Item Addition**: Authenticated users can add new food items to the platform.
*   **Food Item Update**: Users can update details of existing food items they have added.
*   **My Added Foods**: View and manage a list of all food items previously added by the authenticated user.
*   **Order Tracking**: Track and view a history of user-placed orders.
*   **Dynamic UI/UX**: Interactive user interface elements and smooth animations using Framer Motion and Swiper for an enhanced experience.
*   **Responsive Design**: Optimized for various screen sizes, ensuring a consistent experience across devices, implemented with Tailwind CSS and DaisyUI.
*   **Global State Management**: Context API for managing user authentication state across the application.
*   **Error Handling**: Dedicated 404 error page for unhandled routes.
*   **Informational Blog Section**: Engage users with a section for articles and blogs.

## Live Demo

While a live demo link is not currently provided, you can follow the installation instructions to run the project locally and experience it firsthand.

## Tech Stack

WindDelivery is built using a modern and robust technology stack:

*   **Frontend Framework**: [React.js](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/en/main)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [DaisyUI](https://daisyui.com/) (Tailwind CSS Component Library)
*   **Authentication & Backend-as-a-Service**: [Firebase](https://firebase.google.com/)
*   **HTTP Client**: [Axios](https://axios-http.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Sliders/Carousels**: [Swiper](https://swiperjs.com/)
*   **Alerts/Modals**: [SweetAlert2](https://sweetalert2.github.io/)
*   **Languages**: JavaScript, HTML, CSS

## Dependencies

The project relies on the following packages:

### Core Dependencies

*   `axios`: ^1.6.2
*   `firebase`: ^10.7.1
*   `framer-motion`: ^10.16.16
*   `localforage`: ^1.10.0
*   `match-sorter`: ^6.3.1
*   `moment`: ^2.29.4
*   `prop-types`: ^15.8.1
*   `react`: ^18.2.0
*   `react-dom`: ^18.2.0
*   `react-helmet`: ^6.1.0
*   `react-icons`: ^4.12.0
*   `react-router-dom`: ^6.21.0
*   `sort-by`: ^1.2.0
*   `sweetalert2`: ^11.10.1
*   `swiper`: ^11.0.5

### Development Dependencies

*   `@types/react`: ^18.2.43
*   `@types/react-dom`: ^18.2.17
*   `@vitejs/plugin-react`: ^4.2.1
*   `autoprefixer`: ^10.4.16
*   `daisyui`: ^4.4.23
*   `eslint`: ^8.55.0
*   `eslint-plugin-react`: ^7.33.2
*   `eslint-plugin-react-hooks`: ^4.6.0
*   `eslint-plugin-react-refresh`: ^0.4.5
*   `postcss`: ^8.4.32
*   `tailwindcss`: ^3.4.0
*   `vite`: ^5.0.8

## Project Structure

The project follows a well-organized structure to maintain modularity and scalability:

```
WindDelivery/
├── public/                     # Static assets
├── src/                        # Main application source code
│   ├── assets/                 # Images and other media
│   ├── Components/             # Reusable UI components (Navbar, Footer, Banners, Cards)
│   ├── Hook/                   # Custom React hooks
│   ├── Pages/                  # Top-level page components (Home, AllFoods, Cart, Login, Registration, AddFood, MyOrder, etc.)
│   ├── Provider/               # Context providers (e.g., AuthProvider)
│   ├── Routes/                 # Application routing definitions (Routes, PrivateRoute)
│   ├── utility/                # Utility functions and configurations (localStorage, firebase.config)
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Entry point for React application
│   └── index.css               # Global styles
├── .firebase/                  # Firebase related files
├── firebase.json               # Firebase project configuration
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite build tool configuration
├── package.json                # Project dependencies and scripts
├── README.md                   # This file
└── ...
```

## Installation

To get WindDelivery up and running on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/minhazulabidin/WindDelivery.git
cd WindDelivery
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

### 3. Configure Firebase

WindDelivery uses Firebase for authentication and potentially other services. You'll need to set up your Firebase project:

*   Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
*   Register a web app within your Firebase project.
*   Copy your Firebase configuration object.
*   Create a `.env` file in the root of your project (e.g., `WindDelivery/.env`).
*   Add your Firebase credentials to the `.env` file, ensuring they are prefixed with `VITE_` as this project uses Vite for environment variables:

    ```env
    VITE_APIKEY="YOUR_FIREBASE_API_KEY"
    VITE_AUTHDOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
    VITE_PROJECTID="YOUR_FIREBASE_PROJECT_ID"
    VITE_STORAGEBUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
    VITE_MESSAGINGSENDERID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
    VITE_APPID="YOUR_FIREBASE_APP_ID"
    ```
*   Ensure that Firebase Authentication is enabled for Email/Password and any social providers (Google, GitHub) you wish to support.

### 4. Run the Development Server

Once dependencies are installed and Firebase is configured, start the development server:

```bash
npm run dev
```

This will typically open the application in your browser at `http://localhost:5173/` (or another port if 5173 is in use).

### 5. Build for Production

To create a production-ready build of the application:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory.

## Usage

Once the application is running, you can interact with WindDelivery in various ways:

1.  **Browse Food Items**: Navigate to the home page or "All Foods" section to see available dishes.
2.  **User Authentication**:
    *   Click on "Login" or "Register" to create an account or sign in.
    *   Use social login options (Google, GitHub) for quick access.
3.  **Shopping Cart**:
    *   Add desired food items to your cart from product pages.
    *   View and manage your cart items on the "Cart" page.
4.  **Manage Food Items (for authenticated users)**:
    *   "Add Food": Create and list new food items on the platform.
    *   "My Added Foods": View, edit, or delete the food items you've listed.
5.  **My Orders**: Track the status and details of your placed orders.
6.  **Explore Blogs**: Visit the "Blogs" section for informational content.

## Contributing

Contributions are welcome! If you'd like to contribute to WindDelivery, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the project's coding style and includes appropriate tests where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (if available, otherwise assume standard MIT).
