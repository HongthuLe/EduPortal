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

const tasksCollectionRef = collection(db, 'tasks')

class TaskServices {
  // Create:
  createTasks = (newTask) => {
    return addDoc(tasksCollectionRef, newTask)
  }

  //  Read:
  getAllTasks = () => {
    return getDocs(tasksCollectionRef)
  }

  getTask = (id) => {
    const taskDoc = doc(db, 'tasks', id)
    return getDoc(taskDoc)
  }

  // Update:
  updateTask = (id, updatedTask) => {
    const taskDoc = doc(db, 'tasks', id)
    return updateDoc(taskDoc, updatedTask)
  }

  //Delete:
  deleteTask = (id) => {
    const taskDoc = doc(db, 'tasks', id)
    return deleteDoc(taskDoc)
  }
}

export default new TaskServices()
