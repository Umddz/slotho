import { initializeApp } from "firebase/app"
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyzU5i98paVIiCQ3J5dz-eRql9F5aOHBA",
  authDomain: "slotho-87ba6.firebaseapp.com",
  projectId: "slotho-87ba6",
  storageBucket: "slotho-87ba6.appspot.com",
  messagingSenderId: "80505950274",
  appId: "1:80505950274:web:b312179a6d1e94037bdddb"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)