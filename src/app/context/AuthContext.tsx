// src/context/AuthContext.tsx
"use client"; // Marks this as a Client Component for Next.js App Router

import { createContext, useContext, useState, ReactNode } from "react"; // React imports for context and state
import { useRouter } from "next/navigation"; // Next.js hook for client-side routing

// Define the TypeScript interface for the AuthContext shape
interface AuthContextType {
  user: string | null; // User state: username string or null if not logged in
  login: (username: string) => void; // Function to log in with a username
  logout: () => void; // Function to log out and clear user state
}

// Create the context with an undefined initial value, typed with AuthContextType
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to wrap the app and provide auth state
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null); // State to hold the username, null if not logged in
  const router = useRouter(); // Router instance for navigation

  // Login function: sets user state and cookie, then redirects to protected page
  const login = (username: string) => {
    setUser(username); // Update user state with the provided username
    document.cookie = `user=${username}; path=/; max-age=3600`; // Set a cookie with username, expires in 1 hour
    router.push("/protected"); // Redirect to the protected page
  };

  // Logout function: clears user state and cookie, then redirects to home
  const logout = () => {
    setUser(null); // Clear the user state
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"; // Expire the cookie immediately
    router.push("/"); // Redirect to the home page
  };

  // Provide the auth context to children components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Render all child components wrapped by this provider */}
    </AuthContext.Provider>
  );
}

// Custom hook to access the auth context safely
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext); // Get the context value
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider"); // Error if used outside provider
  }
  return context; // Return the auth context (user, login, logout)
}