import { db } from "./main"
import { collection, getDocs } from 'firebase/firestore'

export default async function readAll(collectionID) {
    const collectionRef = collection(db, collectionID)
    const querySnapshot = await getDocs(collectionRef)
    const data = []

    querySnapshot.forEach(doc => data.push(doc.data()))
    return data
}
