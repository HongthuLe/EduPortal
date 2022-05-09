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

const studentsCollectionRef = collection(db, 'students')

class StudentServices {
  // Create:
  createStudents = (newStudent) => {
    return addDoc(studentsCollectionRef, newStudent)
  }

  //  Read:
  getAllStudents = () => {
    return getDocs(studentsCollectionRef)
  }

  getStudent = (id) => {
    const studentDoc = doc(db, 'students', id)
    return getDoc(studentDoc)
  }

  // Update:
  updateStudent = (id, updatedStudent) => {
    const studentDoc = doc(db, 'students', id)
    return updateDoc(studentDoc, updatedStudent)
  }

  //Delete:
  deleteStudent = (id) => {
    const studentDoc = doc(db, 'students', id)
    return deleteDoc(studentDoc)
  }
}

export default new StudentServices()
