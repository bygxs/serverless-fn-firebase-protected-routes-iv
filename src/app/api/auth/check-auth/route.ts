/* // functions/index.js (Firebase project root)
// Require Firebase Functions for serverless deployment on Google Cloud
const functions = require("firebase-functions");

// Export an HTTP-triggered Cloud Function named 'checkAuth'
exports.checkAuth = functions.https.onRequest((req: { cookies: { user: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; user?: any; }): void; new(): any; }; }; }) => {
  // Extract the 'user' cookie set by AuthContext's login function
  const user = req.cookies.user;

  // Check if the user cookie is missing or undefined (not logged in)
  if (!user) {
    // Respond with a 401 Unauthorized status and JSON error message
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  // If cookie exists, respond with a 200 OK status and the username
  res.status(200).json({ user });
}); */