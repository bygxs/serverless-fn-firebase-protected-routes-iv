/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

            //import {onRequest} from "firebase-functions/v2/https";
            //import * as logger from "firebase-functions/logger";


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// functions/index.ts
// functions/index.ts
import * as functions from "firebase-functions";

export const checkAuth = functions.https.onRequest((req, res) => {
  const user: string | undefined = req.cookies.user;
  if (!user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  res.status(200).json({ user });
  // Force redeploy - added comment
});
