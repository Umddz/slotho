import { db } from "./main"
import { doc, getDoc } from 'firebase/firestore'

export default async function read(collectionID, docID) {
    const docSnap = await getDoc(doc(db, collectionID, docID))
    return docSnap.data()
}