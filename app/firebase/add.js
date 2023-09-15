import { db } from "./main"
import { doc, setDoc } from 'firebase/firestore'

export default async function add(collection, docID, data) {
    await setDoc(doc(db, collection, docID), data)
}