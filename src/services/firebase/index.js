import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// CONFIG
import config from "./config";

const app = initializeApp(config);
export const auth = getAuth(app);
