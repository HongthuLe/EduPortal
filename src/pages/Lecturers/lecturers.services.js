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

const lecturersCollectionRef = collection(db, 'lecturers')

class LecturerServices {
  // Create:
  createLecturers = (newLecturer) => {
    return addDoc(lecturersCollectionRef, newLecturer)
  }

  //  Read:
  getAllLecturers = () => {
    return getDocs(lecturersCollectionRef)
  }

  getLecturer = (id) => {
    const lecturerDoc = doc(db, 'lecturers', id)
    return getDoc(lecturerDoc)
  }

  // Update:
  updateLecturer = (id, updatedLecturer) => {
    const lecturerDoc = doc(db, 'lecturers', id)
    return updateDoc(lecturerDoc, updatedLecturer)
  }

  //Delete:
  deleteLecturer = (id) => {
    const lecturerDoc = doc(db, 'lecturers', id)
    return deleteDoc(lecturerDoc)
  }
}

export default new LecturerServices()
