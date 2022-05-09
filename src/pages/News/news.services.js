import { db } from "../../firebase/firebase-config"
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

const newsCollectionRef = collection(db, 'news')

class NewServices {
  // Create:
  createNews = (newNew) => {
    return addDoc(newsCollectionRef, newNew)
  }

  //  Read:
  getAllNews = () => {
    return getDocs(newsCollectionRef)
  }

  getNew = (id) => {
    const newDoc = doc(db, 'news', id)
    return getDoc(newDoc)
  }

  // Update:
  updateNew = (id, updatedNew) => {
    const newDoc = doc(db, 'news', id)
    return updateDoc(newDoc, updatedNew)
  }

  //Delete:
  deleteNew = (id) => {
    const newDoc = doc(db, 'news', id)
    return deleteDoc(newDoc)
  }
}

export default new NewServices()