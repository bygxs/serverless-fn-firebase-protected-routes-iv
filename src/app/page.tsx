"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Cloud Function 4 protected routes
        </Link>
        <div>
          {user ? (
            <button
              onClick={() => logout()}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200"
            >
              Log In
            </Link>
          )}
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to Our App!
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join us today and start your journey with us.
        </p>

        <Link
          href="/login"
          className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200"
        >
          Log In
        </Link>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Try to reach the dashboard without logging in
        </p>
        <Link
          href="/protected"
          className="mt-2 px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-blue-600 transition duration-200"
        >
          Protected
        </Link>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Serverless Functions (/api/) vs Middleware
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Serverless Functions (/api/) or getServerSideProps dodge the
            middleware headache and keep SSR solid. Here’s the quick rundown:
            Serverless Functions (/api/): Write an API route (e.g.,
            pages/api/check-auth.js), check auth there, redirect or pass data.
            Runs server-side, no root-level issues. getServerSideProps: Pages
            Router, server-side per request—check auth, redirect if needed, send
            props. Simple, reliable.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            What are Protected Routes?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A protected page is restricted to authorized users only. Users must
            be logged in to access it. Unauthorized users are redirected to
           
            login.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          How Firebase Cloud Functions Work
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Firebase Cloud Functions serve as a powerful tool for handling server-side logic in a secure manner. The primary purpose of these functions is to check if a user cookie exists on the server side. This check is crucial for maintaining user authentication and ensuring that only authorized users can access certain resources.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          When a request is made to the /checkAuth endpoint, the corresponding Firebase Cloud Function is triggered. This function evaluates the presence of a user cookie. If the cookie is absent, the function responds with an error message indicating that the user is unauthorized, along with a 401 status code. Conversely, if the cookie is present, the function returns the user's information, such as their username, with a 200 status code, confirming that the user is authenticated.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          One of the key advantages of using Firebase Cloud Functions is that they run on Google's serverless platform. This means that the authentication logic is executed on the server side, keeping it secure and away from client-side exposure. This architecture helps in safeguarding sensitive user data and maintaining the integrity of the authentication process.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mt-4">
          To deploy Firebase Cloud Functions, you need to follow a few simple steps. First, install the Firebase CLI using the command <code>npm install -g firebase-tools</code>. After that, log in to your Firebase account with <code>firebase login</code>. Next, initialize your functions with <code>firebase init functions</code>. Finally, deploy your functions using <code>firebase deploy --only functions</code>. Once deployed, you can update your protected routes to fetch data from the Firebase Cloud Function instead of a Next.js API, ensuring a seamless integration of server-side logic.
        </p>
      </div>

    </div>
  );
};

export default HomePage;
