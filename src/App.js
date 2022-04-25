// import React, { useState } from 'react'

// import Dashboard from "./pages/dashboard"
// import Welcome from "./pages/Welcome/welcome"

// import db from "./firebase/firebase-config"
// import { getAuth, onAuthStateChanged } from "firebase/auth"

// const auth = getAuth(db)

// function App() {

//   const [user, setUser] = useState(null)

//   onAuthStateChanged(auth, (usuarioFirebase) => {
//     if(usuarioFirebase) {
//       setUser(usuarioFirebase)
//     } else {
//       setUser(null)
//     }
//   })

//   return (
//     <>
//       {user ? <Dashboard /> : <Welcome />}
//     </>
//   )
// }
// export default App

import { Routes, Route } from "react-router-dom"

// layout:
import Layout from "./Layout/layout"
// pages:
import Welcome from "./pages/Welcome/welcome"
import Dashboard from "./pages/Dashboard/dashboard"
import Student from "./pages/Students/students"
import Lecturer from "./pages/Lecturers/lecturers"
import News from "./pages/News/news"
import TodoList from "./pages/ToDo/todo"
import Courses from "./pages/Courses/courses"
//  test:
import SingleStudent from "./pages/Students/SingleStudent/singleStudent"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/students"
          element={
            <Layout>
              <Student />
            </Layout>
          }
        />
        <Route
          path="/lecturers"
          element={
            <Layout>
              <Lecturer />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <TodoList />
            </Layout>
          }
        />
        <Route
          path="/single"
          element={
            <Layout>
              <SingleStudent />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}
export default App
