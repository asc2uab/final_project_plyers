# Plyers - E-Commerce Furniture Marketplace

## Introduction
Plyers is an E-Commerce Furniture Marketplace that allows users to buy new furniture and sell their pre-owned furniture. The platform provides a seamless and engaging experience for users to furnish their homes with both new and pre-owned furniture while enjoying exclusive coupons and discounts.

## Features
- User Authentication: Users can sign up, log in, and log out.
- Product Listings: Users can list their furniture items for sale with detailed descriptions and images.
- Purchase New Furniture: Users can browse and purchase new furniture from a wide range of categories.
- Sell Old Furniture: Users can sell their pre-owned furniture to others, offering a sustainable way to upgrade their homes.
- Search Functionality: A robust search bar helps users find specific furniture items or categories quickly.
- Coupon System: Users receive exciting coupons on their purchases, providing additional savings and benefits.
- Notifications: Users can set notifications for special offers, sales, and new listings to stay updated with the latest deals.
- User Reviews and Ratings: Buyers and sellers can leave reviews and ratings for each other, ensuring a trusted and reliable marketplace.
- Responsive Design: The application is designed to work seamlessly on various screen sizes.

## Technologies Used
- React: Frontend framework for building the user interface.
- Node.js: Server runtime environment for running the backend.
- Express: Backend framework for handling API requests and database interactions.
- MongoDB: Database for storing user and product data.
- Bootstrap: CSS framework for responsive and appealing design.

## Installation
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd plyers`

## Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install frontend dependencies: `npm install`
3. Start the React development server: `npm start`
4. Open your browser and navigate to: `http://localhost:3000`

## Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install backend dependencies: `npm install`
3. Start the Node.js server: `node server.js`
4. Ensure your MongoDB database is running and accessible.

## Usage
- Visit `http://localhost:3000` in your browser to access the application.
- Sign up or log in using your credentials.
- List new furniture items for sale, browse available items, and purchase desired products.
- Enjoy exclusive coupons and discounts on your purchases.

## Environment Variables
Ensure you have a `.env` file in the `backend` directory with the following content:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Note
- Make sure your MongoDB database is properly set up and accessible.
- Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual MongoDB connection string and JWT secret.
