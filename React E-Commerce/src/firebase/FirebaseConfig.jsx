
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
import{getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB8NL1Hn3M9frNnoda7HVVHeiRZLocuZRc",
  authDomain: "react-e-commerce-3d757.firebaseapp.com",
  projectId: "react-e-commerce-3d757",
  storageBucket: "react-e-commerce-3d757.appspot.com",
  messagingSenderId: "698787956407",
  appId: "1:698787956407:web:8e8bedfee45fb1bfff6f32"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth};